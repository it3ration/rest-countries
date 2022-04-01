import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
const SearchForm = () => {
  const [region, setRegion] = useState("");
  const handleChange = (e) => {
    setRegion(e.target.value);
  };
  return (
    <div className="filter-form">
      <TextField
        sx={{ width: "20%" }}
        id="search"
        label="Search for a country"
        variant="outlined"
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
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="America">America</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SearchForm;
