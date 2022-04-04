import React from "react";
import Card from "./Card";
import Grid from "@mui/material/Grid";
const Cards = (props) => {
  return (
    <>
      {props.countries &&
        props.countries.map((country, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card
              index={index}
              flag={country.flag}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </Grid>
        ))}
    </>
  );
};

export default Cards;
