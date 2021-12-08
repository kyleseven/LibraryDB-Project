import "../App.css";
import DeviceDisplay from "../components/DeviceDisplay";
import "emerald-ui/lib/styles.css";
import { useEffect } from "react";

function RentDevices() {
  useEffect(() => {
    document.title = "Rent Devices";
  }, []);

  return (
    <div className="App">
      <DeviceDisplay />
    </div>
  );
}

export default RentDevices;
