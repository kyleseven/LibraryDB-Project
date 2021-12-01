import { useEffect } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import Button from 'emerald-ui/lib/Button';

function StudentHome() {
  useEffect(() => {
    document.title = "Student Home"
  }, []);

  return (
    <div className="App">
      <div style={{ paddingBottom: "10px" }} />
      <h1>Hello user1!</h1>
      <h3>STUDENT</h3>
      <Link to="/rentbooks"><Button style={{padding: "5px"}}>Rent Books</Button></Link>
      <Link to="/rentstudyrooms"><Button style={{padding: "5px"}}>Rent Study Room</Button></Link>
      <Link to="/rentdevices"><Button style={{padding: "5px"}}>Rent Device</Button></Link>
      <Button style={{padding: "5px"}} color="danger">Log Out</Button>
    </div>
  );
}

export default StudentHome;