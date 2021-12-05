import { useEffect } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import SearchForm from 'emerald-ui/lib/SearchForm';
import StudyRoomDisplay from '../components/StudyRoomDisplay';

function RentStudyRooms() {
  useEffect(() => {
    document.title = "Rent Study Rooms"
  }, []);

  return (
    <div className="App">
      <StudyRoomDisplay />
    </div>
  );
}

export default RentStudyRooms;