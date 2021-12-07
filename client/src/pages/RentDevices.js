import { useEffect } from 'react';
import '../App.css'
import 'emerald-ui/lib/styles.css'
import DeviceDisplay from '../components/DeviceDisplay';

function RentDevices() {
  useEffect(() => {
    document.title = "Rent Devices"
  }, []);

  return (
    <div className="App">
      <DeviceDisplay />
    </div>
  );
}

export default RentDevices;