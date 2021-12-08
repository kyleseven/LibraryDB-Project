from typing import Optional
from pydantic import BaseModel


class Book(BaseModel):
    book_id: Optional[int]
    title: str
    author: str
    physical_location: str
    publisher: str
    subject: str
    publication_date: str
    language_written_in: str
    ISBN_13: str
    is_rented: bool = False


class StudyRoom(BaseModel):
    room_no: int


class Device(BaseModel):
    device_id: Optional[int]
    type: str
    is_rented: bool = False


class Student(BaseModel):
    name: str
    address: str


class StudentAccount(BaseModel):
    name: str
    address: str
    username: str
    password: str
