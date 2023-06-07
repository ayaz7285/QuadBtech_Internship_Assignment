// This is a form where user fills in his details and confirms booking a ticket

import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Booking() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [show, setShow] = useState(null);
  const { showId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=all`
        );
        const data = await response.json();
        const matchedShow = data.find(
          (item) => item.show.id === parseInt(showId)
        );
        setShow(matchedShow.show);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [showId]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    age: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    // Store form data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(localStorage.getItem("formData")); // You can verify the formdata on the console
  };

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <Paper className="booking" elevation={5}>
      <div style={{ display: "flex", minHeight: "92vh" }}>
        <div style={{ width: "40%" }}>
          <img
            src={show.image.original}
            alt={show.name}
            height={"100%"}
            width={"100%"}
          />
        </div>
        <div
          style={{
            width: "60%",
            padding: "3vw",
            textAlign: "left",
            fontSize: "18px",
          }}
        >
          <h1 style={{ fontSize: "45px" }}>{show.name}</h1>
          <div>
            <b>Genre</b> :{" "}
            {show.genres.map((genre) => (
              <span>{genre}&nbsp;</span>
            ))}
          </div>
          <div>
            {" "}
            <b>Language: </b> {show.language}
          </div>
          <div>
            {" "}
            <b>Rating: </b> {show.rating.average}
          </div>
          <div>
            {" "}
            <b>Status: </b> {show.status}
          </div>
          <div>
            {" "}
            <b>Runtime: </b> {show.runtime}
          </div>
          <div>
            {" "}
            <b>Schedule: </b>
            {show.schedule.time} on{" "}
            {show.schedule.days.map((day) => (
              <span>{day}&nbsp;</span>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <TextField
              required
              id="outlined-name"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              sx={{ width: "70%", marginTop: "10px" }}
            />
            <TextField
              required
              id="outlined-email"
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ width: "70%", marginTop: "10px" }}
            />
            <TextField
              required
              id="outlined-contactNumber"
              label="Contact Number"
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange}
              sx={{ width: "70%", marginTop: "10px" }}
            />
            <TextField
              required
              id="outlined-age"
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              sx={{ width: "70%", marginTop: "10px" }}
            />
            <div style={{ marginTop: "10px" }}>
              <Button
                size="small"
                variant="outlined"
                type="submit"
                onClick={handleClick}
              >
                Confirm
              </Button>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                {formData.name} your ticket for {show.name} is confirmed
              </Alert>
            </Snackbar>
          </form>
        </div>
      </div>
    </Paper>
  );
}
