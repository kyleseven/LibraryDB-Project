import { useEffect, useState } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import 'emerald-ui/lib/styles.css';
import SearchForm from 'emerald-ui/lib/SearchForm';
import BookDisplay from '../components/BookDisplay';
import axios from 'axios';

function RentBooks() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Rent Books"
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    axios.get(`/book/title/${searchQuery}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
      .then(res => {
          navigate(`/book/${res.data.book_id}`);
        }
      )
      .catch(() => { alert("Book not found."); })
  }

  const onChange = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="App">
      <SearchForm inputId="bookSearch" placeholder="Search for a Book" onSubmit={onSubmit} onChange={onChange} clearable></SearchForm>
      <BookDisplay />
    </div>
  );
}

export default RentBooks;