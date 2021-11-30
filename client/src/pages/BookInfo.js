import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link, useParams } from 'react-router-dom';
import 'emerald-ui/lib/styles.css';
import Button from 'emerald-ui/lib/Button';
import Icon from 'emerald-ui/lib/Icon'

function BookInfo() {
  const { book_id } = useParams();
  const [bookInfo, setBookInfo] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/book/${book_id}`).then(res => {
      setBookInfo(res.data);
      setLoading(false);
    });
    document.title = "Book Info"
  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <Link to="/rentbooks">
        <Button>
          <Icon name="arrow_back" />
          Back to Search
        </Button>
      </Link>
      <h1>{bookInfo[0].title}</h1>
      <p>
        <b>Author:</b> {bookInfo[0].author}<br />
        <b>Subject:</b> {bookInfo[0].subject}<br />
        <b>Publisher:</b> {bookInfo[0].publisher}<br />
        <b>Published:</b> <tt>{bookInfo[0].publication_date}</tt><br />
        <b>Language:</b> <tt>{bookInfo[0].language_written_in}</tt><br />
        <b>Physical Location:</b> <tt>{bookInfo[0].physical_location}</tt><br />
        <b>ISBN-13:</b> <tt>{bookInfo[0].ISBN_13}</tt><br />
      </p>
      <Button color="warning">Rent Book (not implemented)</Button>
    </div>
  );
}

export default BookInfo;