import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from 'emerald-ui/lib/Button';
import TextField from 'emerald-ui/lib/TextField';
import axios from 'axios';

function RegisterStudent() {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register Student";
  }, []);

  const onSubmit = (data) => {
    axios.post("/user/register", data)
    .then(() => {
      alert("Success! You've been registered!");
      navigate("/");
    }).catch(error => { alert(error.response.data.detail); })
  }

  return (
    <div className="App" style={{ justifyContent: "center", paddingLeft: "150px", paddingRight: "150px" }}>
      <h1>Register New Student Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={
            ({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Name (First and Last)"
              />
            )
          }
        />
        <Controller
          name="address"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={
            ({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Address"
              />
            )
          }
        />
        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={
            ({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Username"
              />
            )
          }
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={
            ({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Password"
                type="password"
              />
            )
          }
        />
        <Button type="submit" color="info">Register</Button>
      </form>
    </div>
  )
}

export default RegisterStudent;