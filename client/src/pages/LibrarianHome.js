import { useEffect } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import Button from 'emerald-ui/lib/Button';

function LibrarianHome() {
  useEffect(() => {
    document.title = "Librarian Home"
  }, []);

  return (
    <div className="App">
      <div style={{ paddingBottom: "10px" }} />
      <h1>Hello user2!</h1>
      <h3>LIBRARIAN</h3>
      <Link to="/rentbooks"><Button style={{padding: "5px"}}>Add Book</Button></Link>
      <Link to="/rentstudyrooms"><Button style={{padding: "5px"}}>Add Room</Button></Link>
      <Link to="/rentdevices"><Button style={{padding: "5px"}}>Add Device</Button></Link>
      <Button style={{padding: "5px"}}>Process Return</Button>
      <Button style={{padding: "5px"}} color="danger">Log Out</Button>
    </div>
  );
}

export default LibrarianHome;