import logo from './logo.svg';
import './App.css';
import { Routes, Link, Route, BrowserRouter } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import Nav from 'emerald-ui/lib/Nav'
import Navbar from 'emerald-ui/lib/Navbar';
import Button from 'emerald-ui/lib/Button';

import StudentHome from './pages/StudentHome';
import RentBooks from './pages/RentBooks';
import RentStudyRooms from './pages/RentStudyRooms';
import RentDevices from './pages/RentDevices';
import BookInfo from './pages/BookInfo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar>
          <Navbar.Brand>
            <h1 style={{ margin: "auto" }}>Library Database</h1>
          </Navbar.Brand>
          <Nav grow collapsible>
            <Link to="/">Home</Link>
          </Nav>
        </Navbar>
        <Routes>
          <Route path="/" element={<StudentHome />} />
          <Route path="/rentbooks" element={<RentBooks />} />
          <Route path="/rentstudyrooms" element={<RentStudyRooms />} />
          <Route path="/rentdevices" element={<RentDevices />} />
          <Route path="/book/:book_id" element={<BookInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
