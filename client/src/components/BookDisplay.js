import { useEffect, useState } from 'react';
import '../App.css'
import 'emerald-ui/lib/styles.css';
import { Link } from 'react-router-dom';
import Card from 'emerald-ui/lib/Card';
import CardGrid from 'emerald-ui/lib/CardGrid';
import axios from 'axios';


function BookDisplay() {
  const [books, setBooks] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/books", { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
      .then(res => {
        setBooks(res.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>
  }

  return (
    <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
      <CardGrid>
        {books.map(book => <Card key={book.book_id}>
          <Link to={"/book/" + book.book_id}><h2>{book.title}</h2></Link><br />
          <i>by {book.author}</i>
        </Card>)}
      </CardGrid>
    </div>
  )
}

export default BookDisplay;