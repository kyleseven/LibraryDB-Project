import '../App.css';
import 'emerald-ui/lib/styles.css';
import axios from 'axios';
import TextField from 'emerald-ui/lib/TextField';
import Button from 'emerald-ui/lib/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import qs from 'query-string';

function Login({ setHomeLink, setShowDeleteButtons }) {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const onSubmit = (data) => {
    data = {
      grant_type: "password",
      username: data.username,
      password: data.password
    }
    axios.post("/token", qs.stringify(data)).then(res => {
      sessionStorage.setItem("token", res.data.access_token);
      let homeLink = "";
      axios.get("/user/me/account_type", { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
        .then(res => {
          if (res.data.account_type === "AccountType.STUDENT") {
            homeLink = "/studenthome";
            setHomeLink(homeLink);
            setShowDeleteButtons(false);
          }
          else if (res.data.account_type === "AccountType.LIBRARIAN") {
            homeLink = "/librarianhome";
            setHomeLink(homeLink);
            setShowDeleteButtons(true);
          }
          else {
            alert("Invalid account type.")
          }
          navigate(homeLink);
        });
    }).catch(error => { alert(error.response.data.detail); })
  }

  return (
    <div className="App" style={{ justifyContent: "center", paddingLeft: "150px", paddingRight: "150px" }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button style={{ padding: "5px" }}type="submit" color="info">Log In</Button>
        <Link to="/registerstudent"><Button style={{ padding: "5px" }}>Register Student</Button></Link>
      </form>
    </div>
  )
}

export default Login;