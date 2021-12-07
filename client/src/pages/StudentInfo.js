import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import 'emerald-ui/lib/styles.css';
import Button from 'emerald-ui/lib/Button';

function StudentInfo() {
  const [studentInfo, setStudentInfo] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/user/student/info`, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
    .then(res => {
      setStudentInfo(res.data);
      setLoading(false);
    });
    document.title = "Student Info"
  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{studentInfo.title}</h1>
      <p>
        <b>Name:</b> {studentInfo.name}<br />
        <b>Address:</b> {studentInfo.address}<br />
      </p>
      <Link to="/studentinfo/update"><Button color="info">Update Info</Button></Link>
    </div>
  );
}

export default StudentInfo;