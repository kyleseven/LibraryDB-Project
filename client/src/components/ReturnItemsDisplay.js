import axios from "axios";
import Button from "emerald-ui/lib/Button";
import { useEffect, useState } from "react";

function ReturnItemsDisplay() {
  const [rentedItems, setRentedItems] = useState();
  const [bookTitle, setBookTitle] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/user/me/items", {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      })
      .then((res) => {
        setRentedItems(res.data);
        if (res.data.rented_book !== 0) {
          axios
            .get(`/book/${res.data.rented_book}`, {
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
              },
            })
            .then((res) => {
              setBookTitle(res.data.title);
            });
        }
      })
      .catch((error) => {
        alert(error);
      });
    setLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const returnBook = () => {
    if (rentedItems.rented_book === 0) {
      alert("You're currently not renting a book.");
      return;
    }

    let userChoice = window.confirm(
      `Are you sure you want to return ${bookTitle}?`
    );
    if (userChoice) {
      axios
        .post(
          `/return/book/${rentedItems.rented_book}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        )
        .then(() => {
          alert(`You have returned ${bookTitle}!`);
          rentedItems.rented_book = 0;
        })
        .catch((error) => {
          alert(error.response.data.detail);
        });
    }
  };

  const returnStudyRoom = () => {
    if (rentedItems.rented_study_room === 0) {
      alert("You're currently not renting a study room.");
      return;
    }

    let userChoice = window.confirm(
      `Are you sure you want to return Study Room ${rentedItems.rented_study_room}?`
    );
    if (userChoice) {
      axios
        .post(
          `/return/study_room/${rentedItems.rented_study_room}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        )
        .then(() => {
          alert(
            `You have returned Study Room ${rentedItems.rented_study_room}!`
          );
          rentedItems.rented_study_room = 0;
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const returnDevice = () => {
    if (rentedItems.rented_device === 0) {
      alert("You're currently not renting a device.");
      return;
    }

    let userChoice = window.confirm(
      `Are you sure you want to return Device ID#${rentedItems.rented_device}?`
    );
    if (userChoice) {
      axios
        .post(
          `/return/device/${rentedItems.rented_device}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        )
        .then(() => {
          alert(`You have returned Device ID#${rentedItems.rented_device}!`);
          rentedItems.rented_device = 0;
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
      <h1>Return Items</h1>
      <Button style={{ padding: "5px" }} onClick={returnBook}>
        Return Book
      </Button>
      <Button style={{ padding: "5px" }} onClick={returnStudyRoom}>
        Return Study Room
      </Button>
      <Button style={{ padding: "5px" }} onClick={returnDevice}>
        Return Device
      </Button>
    </div>
  );
}

export default ReturnItemsDisplay;
