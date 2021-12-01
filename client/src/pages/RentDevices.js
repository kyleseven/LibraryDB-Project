import { useEffect } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import SearchForm from 'emerald-ui/lib/SearchForm';
import Button from 'emerald-ui/lib/Button'

function RentDevices() {
  useEffect(() => {
    document.title = "Rent Devices"
  }, []);

  return (
    <div className="App">
      <SearchForm placeholder="Search for a Device"></SearchForm>
        <div style={{padding: "40px"}}>
          <Button color="success">Rent Laptops</Button>
          <Button color="success">Rent Projectors</Button>
          <Button color="success">Rent Tablets</Button>
        </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default RentDevices;