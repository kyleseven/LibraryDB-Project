import { useEffect } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
import 'emerald-ui/lib/styles.css'
import Button from 'emerald-ui/lib/Button';
import TextField from 'emerald-ui/lib/TextField'

function AddBook() {
  useEffect(() => {
    document.title = "Student Home"
  }, []);

  return (
    <div style={{paddingLeft: "40px", paddingRight: "40px"}}>
      <h1>Add a Book</h1>
      <TextField label="Title"></TextField>
      <TextField label="Author"></TextField>
      <TextField label="Publisher"></TextField>
      <TextField label="Publication Date"></TextField>
      <TextField label="Language Code"></TextField>
      <TextField label="Physical Location"></TextField>
      <TextField label="ISBN-13"></TextField>
      <Button color="success">Add Book</Button>
    </div>
  );
}

export default AddBook;