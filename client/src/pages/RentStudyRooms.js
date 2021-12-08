import "../App.css";
import StudyRoomDisplay from "../components/StudyRoomDisplay";
import "emerald-ui/lib/styles.css";
import { useEffect } from "react";

function RentStudyRooms() {
  useEffect(() => {
    document.title = "Rent Study Rooms";
  }, []);

  return (
    <div className="App">
      <StudyRoomDisplay />
    </div>
  );
}

export default RentStudyRooms;
