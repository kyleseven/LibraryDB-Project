from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
import utils
import mysql.connector

###############
# MySQL Stuff #
###############
conn = mysql.connector.connect(
    user="test",
    password="test",
    host="127.0.0.1",
    port=3306,
    database="LIBRARY"
)

# MySQL cursor
cur = conn.cursor()


#######################
# FastAPI Declaration #
#######################
app = FastAPI()

# CORS (Cross-Origin Resource Sharing)
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


##########################################################################
# Authentication Handling                                                #
# Refer to https://fastapi.tiangolo.com/tutorial/security/simple-oauth2/ #
##########################################################################
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

class User:
    username: str
    password: str
    type: str

def get_user_from_username(username: str):
    cur.execute(f"SELECT * FROM ACCOUNT WHERE username=\"{username}\"")
    data = utils.dict_to_json(cur)
    return data[0] if data else {}

@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user_dict = get_user_from_username(form_data.username)
    # Verify username and password
    # Username does not exist
    if not user_dict:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    # Password does not match
    if not user_dict["password"] == form_data.password:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    return {"access_token": user_dict["username"], "token_type": "bearer"}


#######
#     #
# API #
#     #
#######
@app.get("/books")
async def list_books():
    cur.execute("SELECT * FROM BOOK")
    data = utils.dict_to_json(cur)
    return data

@app.get("/book/{book_id}")
async def get_book_by_id(book_id):
    cur.execute(f"SELECT * FROM BOOK WHERE book_id={book_id}")
    data = utils.dict_to_json(cur)
    if not data:
        raise HTTPException(status_code=404, detail="Book not found.")
    return data[0]
