// This page shows all the relevant details of a show

import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { useParams, NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export default function Movie() {
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

  if (!show) {
    return <div>Loading...</div>;
  }

  const renderSummary = () => {
    return { __html: show.summary };
  };

  const url = "/booking/" + show.id;

  return (
    <Paper className="movie" elevation={5}>
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
          <p dangerouslySetInnerHTML={renderSummary()}></p>
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
          <div style={{ marginTop: "10px" }}>
            <NavLink
              style={{
                textDecoration: "none",
                color: "white",
              }}
              to={url}
            >
              <Button size="small" variant="outlined">
                Book Show
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </Paper>
  );
}
