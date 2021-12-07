from datetime import datetime, timedelta
from enum import Enum
from typing import Optional
from wsgiref import headers
from fastapi import FastAPI, HTTPException, status, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from jose import JWTError, jwt
from models import Book, Device
import utils
import mysql.connector
import json

# MySQL Stuff
conn = mysql.connector.connect(
    user="test",
    password="test",
    host="127.0.0.1",
    port=3306,
    database="LIBRARY"
)

# MySQL cursor
cur = conn.cursor()

# FastAPI Stuff
app = FastAPI()

# CORS Origins
# Required for requests from React app to work
origins = [
    "http://localhost:3000",
    "http://localhost:8000",
    "http://localhost"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

########################################################################
# Authentication Handling                                              #
# Refer to: https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/ #
########################################################################
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

SECRET_KEY = "4e4cddfb4fe2d4ec58c05c4a659a51fc39fcd7d6a06a9aedcf47823ca8a85f25"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


# Add token here when the user logs out.
token_blacklist = []


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None


class User(BaseModel):
    account_id: int
    username: str
    password: str


class AccountType(Enum):
    STUDENT = 1
    LIBRARIAN = 2
    BURSAR = 3


def get_user_from_username(username: str):
    cur.execute(f"SELECT * FROM ACCOUNT WHERE username=\"{username}\"")
    data = utils.dict_to_json(cur)
    if not data:
        return None

    return User(
        account_id=data[0]["account_id"],
        username=data[0]["username"],
        password=data[0]["password"]
    )


def get_user_account_type(current_user: User):
    cur.execute(f"SELECT * FROM STUDENT_ACCOUNT WHERE account_id={current_user.account_id}")
    data = utils.dict_to_json(cur)
    print("\naccdata")
    print(data)
    if data:
        return AccountType.STUDENT

    cur.execute(f"SELECT * FROM EMPLOYEE_ACCOUNT, EMPLOYEE, LIBRARIAN WHERE LIBRARIAN.employee_id=EMPLOYEE.employee_id AND EMPLOYEE.account_id={current_user.account_id}")
    data = utils.dict_to_json(cur)
    if data:
        return AccountType.LIBRARIAN

    cur.execute(f"SELECT * FROM EMPLOYEE_ACCOUNT, EMPLOYEE, BURSAR WHERE BURSAR.employee_id=EMPLOYEE.employee_id AND EMPLOYEE.account_id={current_user.account_id}")
    data = utils.dict_to_json(cur)
    if data:
        return AccountType.BURSAR


def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def authenticate_user(username: str, password: str):
    user = get_user_from_username(username)
    print("\n\n\n")
    print(user)

    if not user:
        return False
    if not user.password == password:
        return False

    return user


async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials.",
        headers={"WWW-Authenticate": "Bearer"}
    )

    if token in token_blacklist:
        raise credentials_exception

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms={ALGORITHM})
        username: str = payload.get("sub")  # type: ignore
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception

    user = get_user_from_username(token_data.username)  # type: ignore
    if user is None:
        raise credentials_exception

    return user


@app.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user(form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password.",
            headers={"WWW-Authenticate": "Bearer"}
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


###############
#             #
#     API     #
#             #
###############


#########
# BOOKS #
#########
@app.get("/books")
async def list_books(current_user: User = Depends(get_current_user)):
    cur.execute("SELECT * FROM BOOK WHERE is_rented=false")
    data = utils.dict_to_json(cur)
    return data


@app.get("/book/{book_id}")
async def get_book_by_id(book_id: int, current_user: User = Depends(get_current_user)):
    cur.execute(f"SELECT * FROM BOOK WHERE book_id={book_id}")
    data = utils.dict_to_json(cur)
    if not data:
        raise HTTPException(status_code=404, detail="Book not found.")
    return data[0]


@app.get("/book/title/{book_title}")
async def get_book_id_by_title(book_title: str, current_user: User = Depends(get_current_user)):
    cur.execute(f"SELECT * FROM BOOK WHERE title LIKE \"%{book_title}%\" AND is_rented=false")
    data = utils.dict_to_json(cur)
    if not data:
        raise HTTPException(status_code=404, detail="Book not found.")
    return {
        "book_id": data[0]["book_id"]
    }


@app.post("/rent/book/{book_id}")
async def rent_book_by_id(book_id: int, current_user: User = Depends(get_current_user)):
    if get_user_account_type(current_user) != AccountType.STUDENT:
        raise HTTPException(status_code=401, detail="Your account type cannot access this.")

    if utils.student_already_rented(cur, "book", current_user.account_id):
        raise HTTPException(status_code=401, detail="Return your current book before renting another.")

    cur.execute(f"UPDATE BOOK SET is_rented=true WHERE book_id={book_id}")
    cur.execute(f"UPDATE STUDENT SET rented_book={book_id} WHERE account_id={current_user.account_id}")
    conn.commit()
    return book_id


@app.post("/return/book/{book_id}")
async def return_book_by_id(book_id: int, current_user: User = Depends(get_current_user)):
    if get_user_account_type(current_user) != AccountType.STUDENT:
        raise HTTPException(status_code=401, detail="Your account type cannot access this.")

    cur.execute(f"SELECT rented_book from STUDENT WHERE account_id={current_user.account_id}")
    rented_book_id = utils.dict_to_json(cur)[0]["rented_book"]

    if book_id != rented_book_id:
        raise HTTPException(status_code=400, detail="You can't return a book that you haven't rented.")

    cur.execute(f"UPDATE BOOK SET is_rented=false WHERE book_id={book_id}")
    cur.execute(f"UPDATE STUDENT SET rented_book=0 WHERE account_id={current_user.account_id}")
    conn.commit()

    return book_id


@app.post("/add/book/")
async def add_book(book: Book, current_user: User = Depends(get_current_user)):
    if get_user_account_type(current_user) != AccountType.LIBRARIAN:
        raise HTTPException(status_code=401, detail="Your account type cannot access this.")

    query = "INSERT INTO BOOK " \
            "(title, author, physical_location, publisher, subject, publication_date, language_written_in, ISBN_13) " \
            "VALUES " \
            f"('{book.title}', '{book.author}', '{book.physical_location}', '{book.publisher}', '{book.subject}', '{book.publication_date}', '{book.language_written_in}', {book.ISBN_13})"

    try:
        cur.execute(query)
        conn.commit()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Database Error: {err}")

    return book


###############
# STUDY ROOMS #
###############
@app.get("/studyrooms")
async def list_study_rooms(current_user: User = Depends(get_current_user)):
    cur.execute("SELECT * FROM STUDY_ROOM WHERE is_rented=false")
    data = utils.dict_to_json(cur)

    return data


@app.get("/studyroom/{room_no}")
async def get_study_room_by_room_no(room_no: int, current_user: User = Depends(get_current_user)):
    cur.execute(f"SELECT * FROM STUDY_ROOM WHERE room_no={room_no}")
    data = utils.dict_to_json(cur)
    if not data:
        raise HTTPException(status_code=404, detail="Device not found.")

    return data[0]


@app.post("/rent/studyroom/{room_no}")
async def rent_study_room_by_room_no(room_no: int, current_user: User = Depends(get_current_user)):
    if get_user_account_type(current_user) != AccountType.STUDENT:
        raise HTTPException(status_code=401, detail="Your account type cannot access this.")

    if utils.student_already_rented(cur, "study_room", current_user.account_id):
        raise HTTPException(status_code=401, detail="Return your current study room before renting another.")

    cur.execute(f"UPDATE STUDY_ROOM SET is_rented=true WHERE room_no={room_no}")
    cur.execute(f"UPDATE STUDENT SET rented_study_room={room_no} WHERE account_id={current_user.account_id}")
    conn.commit()
    return


@app.post("/return/study_room/{room_no}")
async def return_study_room_by_room_no(room_no: int, current_user: User = Depends(get_current_user)):
    if get_user_account_type(current_user) != AccountType.STUDENT:
        raise HTTPException(status_code=401, detail="Your account type cannot access this.")

    cur.execute(f"SELECT rented_study_room from STUDENT WHERE account_id={current_user.account_id}")
    rented_study_room_no = utils.dict_to_json(cur)[0]["rented_study_room"]

    if room_no != rented_study_room_no:
        raise HTTPException(status_code=400, detail="You can't return a study room that you haven't rented.")

    cur.execute(f"UPDATE STUDY_ROOM SET is_rented=false WHERE room_no={room_no}")
    cur.execute(f"UPDATE STUDENT SET rented_study_room=0 WHERE account_id={current_user.account_id}")
    conn.commit()

    return room_no


@app.post("/add/study_room")
async def add_study_room(current_user: User = Depends(get_current_user)):
    if get_user_account_type(current_user) != AccountType.LIBRARIAN:
        raise HTTPException(status_code=401, detail="Your account type cannot access this.")

    query = "INSERT INTO STUDY_ROOM VALUES ()"

    try:
        cur.execute(query)
        conn.commit()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Database Error: {err}")

    return


###########
# DEVICES #
###########
@app.get("/devices")
async def list_devices(current_user: User = Depends(get_current_user)):
    cur.execute("SELECT * FROM DEVICE WHERE is_rented=false")
    data = utils.dict_to_json(cur)

    return data


@app.get("/device/{device_id}")
async def get_device_by_id(device_id: int, current_user: User = Depends(get_current_user)):
    cur.execute(f"SELECT * FROM DEVICE WHERE device_id={device_id}")
    data = utils.dict_to_json(cur)
    if not data:
        raise HTTPException(status_code=404, detail="Device not found.")

    return data[0]


@app.post("/rent/device/{device_id}")
async def rent_device_by_id(device_id: int, current_user: User = Depends(get_current_user)):
    if get_user_account_type(current_user) != AccountType.STUDENT:
        raise HTTPException(status_code=401, detail="Your account type cannot access this.")

    if utils.student_already_rented(cur, "device", current_user.account_id):
        raise HTTPException(status_code=401, detail="Return your current device before renting another.")

    cur.execute(f"UPDATE DEVICE SET is_rented=true WHERE device_id={device_id}")
    cur.execute(f"UPDATE STUDENT SET rented_device={device_id} WHERE account_id={current_user.account_id}")
    conn.commit()
    return


@app.post("/return/device/{device_id}")
async def return_device_by_id(device_id: int, current_user: User = Depends(get_current_user)):
    if get_user_account_type(current_user) != AccountType.STUDENT:
        raise HTTPException(status_code=401, detail="Your account type cannot access this.")

    cur.execute(f"SELECT rented_device from STUDENT WHERE account_id={current_user.account_id}")
    rented_device_id = utils.dict_to_json(cur)[0]["rented_device"]

    if device_id != rented_device_id:
        raise HTTPException(status_code=400, detail="You can't return a device that you haven't rented.")

    cur.execute(f"UPDATE DEVICE SET is_rented=false WHERE device_id={device_id}")
    cur.execute(f"UPDATE STUDENT SET rented_device=0 WHERE account_id={current_user.account_id}")
    conn.commit()

    return device_id


@app.post("/add/device")
async def add_device(device: Device, current_user: User = Depends(get_current_user)):
    if get_user_account_type(current_user) != AccountType.LIBRARIAN:
        raise HTTPException(status_code=401, detail="Your account type cannot access this.")

    query = f"INSERT INTO DEVICE (type) VALUES ('{device.type}')"

    try:
        cur.execute(query)
        conn.commit()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Database Error: {err}")

    return


@app.get("/user/me/username")
async def get_username(current_user: User = Depends(get_current_user)):
    return {
        "username": current_user.username
    }


@app.get("/user/me/account_type")
async def get_account_type(current_user: User = Depends(get_current_user)):
    return {
        "account_type": str(get_user_account_type(current_user))
    }


@app.get("/user/me/items")
async def get_rented_items(current_user: User = Depends(get_current_user)):
    if get_user_account_type(current_user) != AccountType.STUDENT:
        raise HTTPException(status_code=401, detail="Your account type cannot access this.")

    cur.execute(f"SELECT rented_book, rented_study_room, rented_device FROM STUDENT WHERE account_id={current_user.account_id}")
    data = utils.dict_to_json(cur)

    return data[0]


@app.get("/user/student/info")
async def get_student_info(current_user: User = Depends(get_current_user)):
    if get_user_account_type(current_user) != AccountType.STUDENT:
        raise HTTPException(status_code=401, detail="Your account type cannot access this.")

    cur.execute(f"SELECT * FROM STUDENT WHERE account_id={current_user.account_id}")
    data = utils.dict_to_json(cur)

    return data[0]
