import { useEffect } from 'react';
import './App.css';
import { Routes, Link, Route, BrowserRouter } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import Nav from 'emerald-ui/lib/Nav'
import Navbar from 'emerald-ui/lib/Navbar';

import StudentHome from './pages/StudentHome';
import RentBooks from './pages/RentBooks';
import RentStudyRooms from './pages/RentStudyRooms';
import RentDevices from './pages/RentDevices';
import BookInfo from './pages/BookInfo';
import LibrarianHome from './pages/LibrarianHome';
import AddBook from './pages/AddBook';

function App() {
  useEffect(() => {
    document.title = "Library Database"
  }, []);

  return (
    <div>
      <BrowserRouter>
        {/* This navbar is present on every page */}
        <Navbar>
          <Navbar.Brand>
            <h1 style={{ margin: "auto" }}>Library Database</h1>
          </Navbar.Brand>
          <Nav grow collapsible>
            <Link to="/">Home</Link>
          </Nav>
        </Navbar>
        {/* When adding a new page, add a Route */}
        <Routes>
          {/* TODO Change the root to something else */}
          <Route path="/" element={<StudentHome />} />
          <Route path="/lhome" element={<LibrarianHome />} />
          <Route path="/addbook" element={<AddBook />} />
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
