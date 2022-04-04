import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Box from "@mui/material/Box";
function App() {
  //function that will filter the fetch based on country name
  const filterByCountryName = (collection, searchValue) => {
    return collection.filter(
      (country) => country.name.indexOf(searchValue) > -1
    );
  };
  //function that will filter the fetch based on region
  const filterByRegion = (region) => {};
  return (
    <div className="App" id="app">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
