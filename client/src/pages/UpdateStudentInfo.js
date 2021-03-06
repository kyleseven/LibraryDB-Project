import axios from "axios";
import Button from "emerald-ui/lib/Button";
import TextField from "emerald-ui/lib/TextField";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function UpdateStudentInfo() {
  const { control, handleSubmit } = useForm();
  const [studentInfo, setStudentInfo] = useState();
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/user/student/info`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      })
      .then((res) => {
        setStudentInfo(res.data);
        setLoading(false);
      });
    document.title = "Update Student Info";
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("/user/student/info/update", data, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      })
      .then(() => {
        alert("Info updated!");
        navigate("/studentinfo");
      })
      .catch((error) => {
        alert(error.response.data.detail);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="App"
      style={{
        justifyContent: "center",
        paddingLeft: "150px",
        paddingRight: "150px",
      }}
    >
      <h1>Update Student Info</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          defaultValue={studentInfo.name}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label="Name" />
          )}
        />
        <Controller
          name="address"
          control={control}
          rules={{ required: true }}
          defaultValue={studentInfo.address}
          render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label="Address" />
          )}
        />
        <Button type="submit" color="info">
          Update Info
        </Button>
      </form>
    </div>
  );
}

export default UpdateStudentInfo;
