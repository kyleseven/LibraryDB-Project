import '../App.css';
import 'emerald-ui/lib/styles.css';
import { useForm, Controller } from 'react-hook-form';
import Button from 'emerald-ui/lib/Button';
import TextField from 'emerald-ui/lib/TextField';

function Login() {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div style={{ margin: "50px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{ required: "Username is required." }}
          render={
            ({ onChange, value }) => (
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
          rules={{ required: "Password is required." }}
          render={
            ({ onChange, value }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Password"
                type="password"
              />
            )
          }
        />
        <Button type="submit" color="info" style={{ marginTop: '20px' }}>
          Log In
        </Button>
      </form>
    </div>
  )
}

export default Login;