import React from 'react';
import '../App.css'
import 'emerald-ui/lib/styles.css';
import { Link } from 'react-router-dom';
import Card from 'emerald-ui/lib/Card';
import CardGrid from 'emerald-ui/lib/CardGrid';
import axios from 'axios';

class BookDisplay extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8000/books").then(res => {
      this.setState({ books: res.data })
    });
  }

  render() {
    return (
      <div style={{paddingLeft: "40px", paddingRight: "40px"}}>
        <CardGrid>
          {this.state.books.map(book => <Card key={book.book_id}><Link to={"/book/" + book.book_id}><h2>{book.title}</h2></Link><br />by {book.author}</Card>)}
        </CardGrid>
      </div>
    )
  }
}

export default BookDisplay;