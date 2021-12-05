import { useEffect, useState } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import Button from 'emerald-ui/lib/Button';
import axios from 'axios';

function StudentHome() {
  const [username, setUsername] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Student Home"
    axios.get("http://localhost:8000/user/me/username", { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
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

  return (
    <div className="App">
      <div style={{ paddingBottom: "10px" }} />
      <h1>Hello {username}!</h1>
      <h3>STUDENT</h3>
      <Link to="/rentbooks"><Button style={{ padding: "5px" }}>Rent Books</Button></Link>
      <Link to="/rentstudyrooms"><Button style={{ padding: "5px" }}>Rent Study Room</Button></Link>
      <Link to="/rentdevices"><Button style={{ padding: "5px" }}>Rent Device</Button></Link>
      <Link to="/returnitems"><Button style={{ padding: "5px" }} color="info">Return Items</Button></Link>
      <Link to="/login"><Button style={{ padding: "5px" }} color="danger">Log Out</Button></Link>
    </div>
  );
}

export default StudentHome;