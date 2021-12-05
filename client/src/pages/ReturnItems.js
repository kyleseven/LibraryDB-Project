import "../App.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'emerald-ui/lib/Button';


function ReturnItems() {
  const [rentedItems, setRentedItems] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/user/me/items", { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
    .then(res => {
      setRentedItems(res.data);
      console.log(rentedItems);
      setLoading(false);
    }).catch(error => { alert(error); })
  }, []);

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  // TODO: Implement returns in API and do these
  const returnBook = () => {

  }

  const returnStudyRoom = () => {

  }

  const returnDevice = () => {

  }

  return (
    <div className="App">
      <h1>Return Items</h1>
      <Button style={{ padding: "5px" }}>Return Book</Button>
      <Button style={{ padding: "5px" }}>Return Study Room</Button>
      <Button style={{ padding: "5px" }}>Rent Device</Button>
    </div>
  );
}

export default ReturnItems;