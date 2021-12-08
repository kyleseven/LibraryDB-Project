import axios from "axios";
import Card from "emerald-ui/lib/Card";
import CardGrid from "emerald-ui/lib/CardGrid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudyRoomDisplay() {
  const [studyRooms, setStudyRooms] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/studyrooms", {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      })
      .then((res) => {
        setStudyRooms(res.data);
        setLoading(false);
      })
      .catch((error) => {
        alert(error.response.data.detail);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
      <CardGrid>
        {studyRooms.map((room) => (
          <Card key={room.room_no}>
            <Link to={"/studyroom/" + room.room_no}>
              <h2>Study Room #{room.room_no}</h2>
            </Link>
            <br />
          </Card>
        ))}
      </CardGrid>
    </div>
  );
}

export default StudyRoomDisplay;
