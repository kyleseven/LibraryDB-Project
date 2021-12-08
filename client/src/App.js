import "./App.css";
import AddBook from "./pages/AddBook";
import AddDevice from "./pages/AddDevice";
import BookInfo from "./pages/BookInfo";
import DeviceInfo from "./pages/DeviceInfo";
import LibrarianHome from "./pages/LibrarianHome";
import Login from "./pages/Login";
import RegisterStudent from "./pages/RegisterStudent";
import RentBooks from "./pages/RentBooks";
import RentDevices from "./pages/RentDevices";
import RentStudyRooms from "./pages/RentStudyRooms";
import ReturnItems from "./pages/ReturnItems";
import StudentHome from "./pages/StudentHome";
import StudentInfo from "./pages/StudentInfo";
import StudyRoomInfo from "./pages/StudyRoomInfo";
import UpdateStudentInfo from "./pages/UpdateStudentInfo";
import Nav from "emerald-ui/lib/Nav";
import Navbar from "emerald-ui/lib/Navbar";
import "emerald-ui/lib/styles.css";
import { useEffect, useState } from "react";
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [homeLink, setHomeLink] = useState("/");
  const [showDeleteButtons, setShowDeleteButtons] = useState(false);

  useEffect(() => {
    document.title = "Library Database";
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
          <Route
            path="/"
            element={
              <Login
                setHomeLink={setHomeLink}
                setShowDeleteButtons={setShowDeleteButtons}
              />
            }
          />
          <Route path="/registerstudent" element={<RegisterStudent />} />
          {/* Student Routes */}
          <Route
            path="/studenthome"
            element={<StudentHome setHomeLink={setHomeLink} />}
          />
          <Route path="/studentinfo" element={<StudentInfo />} />
          <Route path="/studentinfo/update" element={<UpdateStudentInfo />} />
          <Route path="/rentbooks" element={<RentBooks />} />
          <Route path="/rentstudyrooms" element={<RentStudyRooms />} />
          <Route path="/rentdevices" element={<RentDevices />} />
          <Route path="/returnitems" element={<ReturnItems />} />
          <Route
            path="/book/:book_id"
            element={<BookInfo showDeleteButtons={showDeleteButtons} />}
          />
          <Route
            path="/studyroom/:room_no"
            element={<StudyRoomInfo showDeleteButtons={showDeleteButtons} />}
          />
          <Route
            path="/device/:device_id"
            element={<DeviceInfo showDeleteButtons={showDeleteButtons} />}
          />
          {/* Librarian Routes */}
          <Route
            path="/librarianhome"
            element={<LibrarianHome setHomeLink={setHomeLink} />}
          />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/adddevice" element={<AddDevice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
