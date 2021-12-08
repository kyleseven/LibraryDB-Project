import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import 'emerald-ui/lib/styles.css';
import Button from 'emerald-ui/lib/Button';
import Icon from 'emerald-ui/lib/Icon'

function StudyRoomInfo({ showDeleteButtons }) {
  const { room_no } = useParams();
  const navigate = useNavigate();
  const [studyRoomInfo, setStudyRoomInfo] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/studyroom/${room_no}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
    .then(res => {
      setStudyRoomInfo(res.data);
      setLoading(false);
    });
    document.title = "Study Room Info"
  }, [room_no])

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const rentStudyRoom = () => {
    axios.post(`/rent/studyroom/${studyRoomInfo.room_no}`, {}, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
    .then(() => {
      alert(`You've rented Study Room #${studyRoomInfo.room_no}`);
      navigate("/studenthome");
    }).catch(error => { alert(error.response.data.detail); })
  }

  const deleteStudyRoom = () => {
    axios.post(`/delete/study_room`, studyRoomInfo, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
    .then(() => {
      alert("Study Room deleted!");
      navigate("/librarianhome");
    })
    .catch(error => { alert(error.response.data.detail) });
  }

  return (
    <div style={{ padding: "40px" }}>
      <Link to="/rentstudyrooms">
        <Button>
          <Icon name="arrow_back" />
          Back to Search
        </Button>
      </Link>
      <h1>Study Room #{studyRoomInfo.room_no}</h1>
      {showDeleteButtons
          ? <Button color="danger" onClick={deleteStudyRoom}>Delete Study Room</Button>
          : <Button color="info" onClick={rentStudyRoom}>Rent Study Room</Button>
      }
    </div>
  );
}

export default StudyRoomInfo;