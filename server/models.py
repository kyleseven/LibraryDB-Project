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
