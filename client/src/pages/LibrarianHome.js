import { useEffect, useState } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import Button from 'emerald-ui/lib/Button';
import axios from 'axios';

function LibrarianHome() {
  const [username, setUsername] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Librarian Home"
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
      <h1>Hello {username}.</h1>
      <h3>LIBRARIAN</h3>
      <Link to="/addbook"><Button style={{ padding: "5px" }}>Add Books</Button></Link>
      <Link to="/rentstudyrooms"><Button style={{ padding: "5px" }}>Add Study Room</Button></Link>
      <Link to="/rentdevices"><Button style={{ padding: "5px" }}>Add Device</Button></Link>
      <Link to="/"><Button style={{ padding: "5px" }} color="danger">Log Out</Button></Link>
    </div>
  );
}

export default LibrarianHome;