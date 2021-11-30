from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import utils
import mysql.connector
import json;

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

#
#
# API
#
#
@app.get("/books")
async def list_books():
    cur.execute("SELECT * FROM BOOK")
    data = utils.dict_to_json(cur)
    return data

@app.get("/book/{book_id}")
async def get_book_by_id(book_id):
    cur.execute(f"SELECT * FROM BOOK WHERE book_id={book_id}")
    data = utils.dict_to_json(cur)
    return data
