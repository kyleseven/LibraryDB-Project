import "../App.css";
import axios from "axios";
import Button from "emerald-ui/lib/Button";
import Icon from "emerald-ui/lib/Icon";
import "emerald-ui/lib/styles.css";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function DeviceInfo({ showDeleteButtons }) {
  const { device_id } = useParams();
  const navigate = useNavigate();
  const [deviceInfo, setDeviceInfo] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/device/${device_id}`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      })
      .then((res) => {
        setDeviceInfo(res.data);
        setLoading(false);
      });
    document.title = "Device Info";
  }, [device_id]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const rentDevice = () => {
    axios
      .post(
        `/rent/device/${deviceInfo.device_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        alert(`You've rented Device ID #${deviceInfo.device_id}`);
        navigate("/studenthome");
      })
      .catch((error) => {
        alert(error.response.data.detail);
      });
  };

  const deleteDevice = () => {
    axios
      .post(`/delete/device`, deviceInfo, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      })
      .then(() => {
        alert("Device deleted!");
        navigate("/librarianhome");
      })
      .catch((error) => {
        alert(error.response.data.detail);
      });
  };

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
        <b>Type:</b> {deviceInfo.type}
        <br />
      </p>
      {showDeleteButtons ? (
        <Button color="danger" onClick={deleteDevice}>
          Delete Device
        </Button>
      ) : (
        <Button color="info" onClick={rentDevice}>
          Rent Device
        </Button>
      )}
    </div>
  );
}

export default DeviceInfo;
