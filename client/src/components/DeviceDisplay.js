import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'emerald-ui/lib/Card';
import CardGrid from 'emerald-ui/lib/CardGrid';


function DeviceDisplay() {
  const [devices, setDevices] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/devices", { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
      .then(res => {
        setDevices(res.data);
        setLoading(false);
      })
      .catch(error => { alert(error.response.data.detail); })
  }, [])

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
      <CardGrid>
        {devices.map(device => <Card key={device.device_id}>
          <Link to={"/device/" + device.device_id}><h2>Device ID #{device.device_id}</h2></Link><br />
          <p>{device.type}</p>
        </Card>)}
      </CardGrid>
    </div>
  )
}

export default DeviceDisplay;