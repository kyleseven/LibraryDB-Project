import '../App.css'
import { Link } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import SearchForm from 'emerald-ui/lib/SearchForm';

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