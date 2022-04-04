import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Cards from "./Cards";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Countries from "../services/UserServices";

const HomePage = (props) => {
  const [region, setRegion] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState();
  const handleChange = (e) => {
    setRegion(e.target.value.toLowerCase());
  };
  const searchCountriesByName = (collection) => {
    return collection.filter(
      (country) =>
        country.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    );
  };

  const filterCountriesByRegion = (collection) => {
    if (region === "") return collection;
    else
      return collection.filter((area) => area.region.toLowerCase() === region);
  };

  const fetchData = async () => {
    const data = await Countries();

    setCountries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="home-page">
      <div className="filter-form">
        <TextField
          sx={{ width: "20%" }}
          id="search"
          label="Search for a country"
          variant="outlined"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <FormControl>
          <InputLabel id="region-label">Filter by Region</InputLabel>
          <Select
            value={region}
            onChange={handleChange}
            labelId="region-label"
            id="region"
            label="Boom"
            className="input-label"
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value="africa">Africa</MenuItem>
            <MenuItem value="americas">Americas</MenuItem>
            <MenuItem value="asia">Asia</MenuItem>
            <MenuItem value="europe">Europe</MenuItem>
            <MenuItem value="oceania">Oceania</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container sx={{ marginTop: "2rem" }} spacing={12}>
        {countries && countries.length === 250 ? (
          <Cards
            countries={searchCountriesByName(
              filterCountriesByRegion(countries)
            )}
          />
        ) : (
          <></>
        )}
      </Grid>
    </main>
  );
};

export default HomePage;
