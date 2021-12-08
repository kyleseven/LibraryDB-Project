import "../App.css";
import ReturnItemsDisplay from "../components/ReturnItemsDisplay";
import { useEffect } from "react";

function ReturnItems() {
  useEffect(() => {
    document.title = "Return Items";
  }, []);

  return (
    <div className="App">
      <ReturnItemsDisplay />
    </div>
  );
}

export default ReturnItems;
