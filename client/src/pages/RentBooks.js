import '../App.css'
import { Routes, Link, Route } from 'react-router-dom';
import 'emerald-ui/lib/styles.css';
import SearchForm from 'emerald-ui/lib/SearchForm';
import Button from 'emerald-ui/lib/Button';
import BookDisplay from '../components/BookDisplay';

function RentBooks() {
  return (
    <div className="App">
      <SearchForm placeholder="Search for a Book"></SearchForm>
      <BookDisplay/>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default RentBooks;