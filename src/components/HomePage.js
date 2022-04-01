import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchForm from "./SearchForm";
import Card from "./Card";
const HomePage = (props) => {
  return (
    <main className="home-page">
      <SearchForm />

      <Grid container sx={{ marginTop: "2rem" }} spacing={12}>
        {/* <Grid item xs={12} md={6} lg={4}>
          xs=12 md=6 lg=4
        </Grid> */}
        {props.countries &&
          props.countries.map((country, index) => (
            <Grid item xs={12} md={6} lg={3}>
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
      </Grid>
      {props.countries && console.log(props.countries[5])}

      {/* <select name="countries">
        {props.countries &&
          props.countries.map((country, index) => (
            <option value={country.name} key={index}>
              {country.name}
            </option>
          ))}
      </select> */}
    </main>
  );
};

export default HomePage;
