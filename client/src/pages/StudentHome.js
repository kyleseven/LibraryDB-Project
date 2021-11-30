import '../App.css'
import { Routes, Link, Route } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import Navbar from 'emerald-ui/lib/Navbar';
import Button from 'emerald-ui/lib/Button';

function StudentHome() {
  return (
    <div className="App">
      <div style={{ paddingBottom: "10px" }} />
      <h1>Hello user1! (Account not implemented)</h1>
      <h3>STUDENT</h3>
      <Link to="/rentbooks"><Button>Rent Books</Button></Link>
      <Link to="/rentstudyrooms"><Button>Rent Study Room</Button></Link>
      <Link to="/rentdevices"><Button>Rent Device</Button></Link>
    </div>
  );
}

export default StudentHome;