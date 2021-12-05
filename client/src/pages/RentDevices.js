import { useEffect } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import SearchForm from 'emerald-ui/lib/SearchForm';
import DeviceDisplay from '../components/DeviceDisplay';

function RentDevices() {
  useEffect(() => {
    document.title = "Rent Devices"
  }, []);

  return (
    <div className="App">
      <SearchForm placeholder="Search for a Device"></SearchForm>
      <DeviceDisplay />
    </div>
  );
}

export default RentDevices;