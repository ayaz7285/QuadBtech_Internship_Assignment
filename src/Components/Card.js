// The card component used to display various shows in homepage

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

export default function MovieCard(props) {
  const { data } = props;
  const url1 = "/booking/" + data.id;
  const url2 = "/show/" + data.id;
  return (
    <Card
      elevation={5}
      sx={{
        maxWidth: 345,
        minWidth: 345,
        margin: "10px",
        paddingTop: "15px",
        paddingBottom: "15px",
      }}
      className="card"
    >
      <CardMedia>
        <img
          src={data.image.medium}
          alt={data.name}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Language:</b> {data.language} &nbsp; &nbsp;<b>Rating:</b>{" "}
          {data.rating.average}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Genre</b> :{" "}
          {data.genres.map((genre) => (
            <span>{genre}&nbsp;</span>
          ))}
        </Typography>
      </CardContent>
      <CardActions style={{ margin: "auto", width: "fit-content" }}>
        <NavLink
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to={url1}
        >
          <Button size="small" variant="outlined">
            Book Show
          </Button>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: "white",
          }}
          to={url2}
        >
          <Button size="small" variant="outlined">
            Learn More
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}
