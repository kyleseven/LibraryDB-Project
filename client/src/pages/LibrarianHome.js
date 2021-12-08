import { useEffect, useState } from 'react';
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import Button from 'emerald-ui/lib/Button';
import axios from 'axios';

function LibrarianHome({ setHomeLink }) {
  const [username, setUsername] = useState();
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Librarian Home"
    axios.get("/user/me/username", { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
      .then(res => {
        setUsername(res.data.username);
        setLoading(false);
      })
      .catch(error => { alert(error.response.data.detail); })
  }, []);

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  const addStudyRoom = () => {
    axios.post("/add/study_room", {}, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
    .then(() => {
      alert("Added a new Study Room!");
    })
    .catch(error => { alert(error.repsonse.data.detail); })
  }

  const logoutUser = () => {
    sessionStorage.setItem("token", "");
    setHomeLink("/")
    navigate("/");
  }

  return (
    <div className="App">
      <div style={{ paddingBottom: "10px" }} />
      <h1>Hello {username}.</h1>
      <h3>LIBRARIAN</h3>
      <Link to="/addbook"><Button style={{ padding: "5px" }}>Add Books</Button></Link>
      <Button style={{ padding: "5px" }} onClick={addStudyRoom}>Add Study Room</Button>
      <Link to="/adddevice"><Button style={{ padding: "5px" }}>Add Device</Button></Link>
      <Link to="/rentbooks"><Button style={{ padding: "5px" }} color="warning">Delete Books</Button></Link>
      <Link to="/rentstudyrooms"><Button style={{ padding: "5px" }} color="warning">Delete Study Rooms</Button></Link>
      <Link to="/rentdevices"><Button style={{ padding: "5px" }} color="warning">Delete Devices</Button></Link>
      <Button style={{ padding: "5px" }} color="danger" onClick={logoutUser}>Log Out</Button>
    </div>
  );
}

export default LibrarianHome;