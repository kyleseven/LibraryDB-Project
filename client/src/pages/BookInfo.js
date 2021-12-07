import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'emerald-ui/lib/styles.css';
import Button from 'emerald-ui/lib/Button';
import Icon from 'emerald-ui/lib/Icon'

function BookInfo() {
  const { book_id } = useParams();
  const navigate = useNavigate();
  const [bookInfo, setBookInfo] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/book/${book_id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
    .then(res => {
      setBookInfo(res.data);
      setLoading(false);
    });
    document.title = "Book Info"
  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const rentBook = () => {
    axios.post(`http://localhost:8000/rent/book/${bookInfo.book_id}`, {}, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
    .then(() => {
      alert(`Book Rented! \"${bookInfo.title}\" is yours to borrow.`);
      navigate("/studenthome");
    }).catch(error => { alert(error.response.data.detail); })
  }

  return (
    <div style={{ padding: "40px" }}>
      <Link to="/rentbooks">
        <Button>
          <Icon name="arrow_back" />
          Back to Search
        </Button>
      </Link>
      <h1>{bookInfo.title}</h1>
      <p>
        <b>Author:</b> {bookInfo.author}<br />
        <b>Subject:</b> {bookInfo.subject}<br />
        <b>Publisher:</b> {bookInfo.publisher}<br />
        <b>Published:</b> <tt>{bookInfo.publication_date}</tt><br />
        <b>Language:</b> <tt>{bookInfo.language_written_in}</tt><br />
        <b>Physical Location:</b> <tt>{bookInfo.physical_location}</tt><br />
        <b>ISBN-13:</b> <tt>{bookInfo.ISBN_13}</tt><br />
      </p>
      <Button color="info" onClick={rentBook}>Rent Book</Button>
    </div>
  );
}

export default BookInfo;