import axios from "axios";
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TextField from 'emerald-ui/lib/TextField';
import Button from 'emerald-ui/lib/Button';

function AddBook() {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post("http://localhost:8000/add/book/", data, { headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` } })
    .then(() => {
      alert("Book added!");
      navigate("/librarianhome");
    })
    .catch(error => { alert(error.response.data.detail); });
  }

  return (
    <div className="App" style={{ justifyContent: "center", paddingLeft: "150px", paddingRight: "150px" }}>
      <h1>Add a Book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={
            ({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Book Title"
              />
            )
          }
        />
        <Controller
          name="author"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={
            ({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Author"
              />
            )
          }
        />
        <Controller
          name="physical_location"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={
            ({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Physical Location"
              />
            )
          }
        />
        <Controller
          name="publisher"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={
            ({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Publisher"
              />
            )
          }
        />
        <Controller
          name="subject"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={
            ({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Subject"
              />
            )
          }
        />
        <Controller
          name="publication_date"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={
            ({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Publication Date (YYYY-MM-DD)"
              />
            )
          }
        />
        <Controller
          name="language_written_in"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={
            ({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Language Code"
              />
            )
          }
        />
        <Controller
          name="ISBN_13"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={
            ({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="ISBN-13"
              />
            )
          }
        />
        <Button type="submit" color="info">Add Book</Button>
      </form>
    </div>
  )
}

export default AddBook;