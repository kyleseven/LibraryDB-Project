import axios from "axios";
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TextField from 'emerald-ui/lib/TextField';
import Button from 'emerald-ui/lib/Button';

function AddDevice() {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post("http://localhost:8000/add/device", data, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
    .then(() => {
      alert("Device added!");
      navigate("/librarianhome");
    })
    .catch(error => { alert(error.response.data.detail); });
  }

  return (
    <div className="App" style={{ justifyContent: "center", paddingLeft: "150px", paddingRight: "150px" }}>
      <h1>Add a Device</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="type"
          control={control}
          render={
            ({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Device Type / Description"
              />
            )
          }
        />
        <Button type="submit" color="info">Add Device</Button>
      </form>
    </div>
  )
}

export default AddDevice;