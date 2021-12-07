import "../App.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'emerald-ui/lib/Button';
import ReturnItemsDisplay from "../components/ReturnItemsDisplay";


function ReturnItems() {
  const [rentedItems, setRentedItems] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Return Items"
  }, []);

  return (
    <div className="App">
      <ReturnItemsDisplay />
    </div>
  );
}

export default ReturnItems;