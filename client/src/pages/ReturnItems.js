import "../App.css";
import { useEffect } from 'react';
import ReturnItemsDisplay from "../components/ReturnItemsDisplay";


function ReturnItems() {
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