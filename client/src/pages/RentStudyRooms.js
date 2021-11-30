import '../App.css'
import { Link } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import SearchForm from 'emerald-ui/lib/SearchForm';

function RentStudyRooms() {
  return (
    <div className="App">
      <SearchForm placeholder="Search for a Study Room"></SearchForm>
      <h1>Study Rooms Go Here</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default RentStudyRooms;