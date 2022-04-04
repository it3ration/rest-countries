import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const MediaCard = (props) => {
  return (
    <Card sx={{ maxWidth: 375 }}>
      <CardMedia
        component="img"
        height="190px"
        sx={{ width: "100%" }}
        image={props.flag}
        alt="some country flag"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Population: {props.population}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Region: {props.region}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Capital: {props.capital}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
