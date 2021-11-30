import '../App.css'
import { Routes, Link, Route } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import Navbar from 'emerald-ui/lib/Navbar';
import SearchForm from 'emerald-ui/lib/SearchForm';
import Button from 'emerald-ui/lib/Button';

function RentDevices() {
  return (
    <div className="App">
      <SearchForm placeholder="Search for a Device"></SearchForm>
      <h1>Devices Go Here</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default RentDevices;