import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Link, Route, BrowserRouter } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import Nav from 'emerald-ui/lib/Nav'
import Navbar from 'emerald-ui/lib/Navbar';

import Login from './pages/Login';
import StudentHome from './pages/StudentHome';
import RentBooks from './pages/RentBooks';
import RentStudyRooms from './pages/RentStudyRooms';
import RentDevices from './pages/RentDevices';
import BookInfo from './pages/BookInfo';
import StudyRoomInfo from './pages/StudyRoomInfo';
import DeviceInfo from './pages/DeviceInfo';
import ReturnItems from './pages/ReturnItems';
import LibrarianHome from './pages/LibrarianHome';
import AddBook from './pages/AddBook';
import AddDevice from './pages/AddDevice';
import StudentInfo from './pages/StudentInfo';
import UpdateStudentInfo from './pages/UpdateStudentInfo';

function App() {
  const [homeLink, setHomeLink] = useState("/");
  const [showDeleteButtons, setShowDeleteButtons] = useState(false);


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
            <Link to={homeLink}>Home</Link>
          </Nav>
        </Navbar>
        {/* When adding a new page, add a Route */}
        <Routes>
          <Route path="/" element={<Login setHomeLink={setHomeLink} setShowDeleteButtons={setShowDeleteButtons}/>} />
          {/* Student Routes */}
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/studentinfo" element={<StudentInfo />} />
          <Route path="/studentinfo/update" element={<UpdateStudentInfo />} />
          <Route path="/rentbooks" element={<RentBooks />} />
          <Route path="/rentstudyrooms" element={<RentStudyRooms />} />
          <Route path="/rentdevices" element={<RentDevices />} />
          <Route path="/returnitems" element={<ReturnItems />} />
          <Route path="/book/:book_id" element={<BookInfo showDeleteButtons={showDeleteButtons}/>} />
          <Route path="/studyroom/:room_no" element={<StudyRoomInfo showDeleteButtons={showDeleteButtons}/>} />
          <Route path="/device/:device_id" element={<DeviceInfo showDeleteButtons={showDeleteButtons}/>} />
          {/* Librarian Routes */}
          <Route path="/librarianhome" element={<LibrarianHome />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/adddevice" element={<AddDevice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
