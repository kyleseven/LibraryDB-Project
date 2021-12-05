import axios from 'axios';
import { useEffect, useState } from 'react';


function ReturnItems() {
  const [rentedItems, setRentedItems] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/user/me/items", { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
    .then(res => {
      setRentedItems(res.data);
      setLoading(false);
    })
  }, []);

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>
      
    </div>
  )
}

export default ReturnItems;