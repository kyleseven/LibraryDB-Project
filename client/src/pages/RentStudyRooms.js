import { useEffect } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import SearchForm from 'emerald-ui/lib/SearchForm';
import Button from 'emerald-ui/lib/Button';

function RentStudyRooms() {
  useEffect(() => {
    document.title = "Rent Study Rooms"
  }, []);

  return (
    <div className="App">
      <SearchForm placeholder="Search for a Study Room"></SearchForm>
      <div className="App" style={{padding: "40px"}}>
        <Button color="success">Rent Study Room 1</Button>
        <Button color="success">Rent Study Room 2</Button>
        <Button color="danger">Rent Study Room 3 (unavailable)</Button>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default RentStudyRooms;