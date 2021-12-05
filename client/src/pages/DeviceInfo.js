import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import { Link, useParams } from 'react-router-dom';
import 'emerald-ui/lib/styles.css';
import Button from 'emerald-ui/lib/Button';
import Icon from 'emerald-ui/lib/Icon'

function DeviceInfo() {
  const { device_id } = useParams();
  const [deviceInfo, setDeviceInfo] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/device/${device_id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
    .then(res => {
      console.log(res.data);
      setDeviceInfo(res.data);
      setLoading(false);
    });
    document.title = "Device Info"
  }, [])

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <Link to="/rentdevices">
        <Button>
          <Icon name="arrow_back" />
          Back to Search
        </Button>
      </Link>
      <h1>Device ID #{deviceInfo.device_id}</h1>
      <p>
        <b>Type:</b> {deviceInfo.type}<br />
      </p>
      <Button color="warning">Rent Device (not impl)</Button>
    </div>
  );
}

export default DeviceInfo;