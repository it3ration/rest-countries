import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Box from "@mui/material/Box";
function App() {
  const [countries, setCountries] = useState();

  const fetchData = async () => {
    try {
      const data = await axios.get("https://restcountries.com/v2/all");

      setCountries(data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //function that will filter the fetch based on country name
  const filterByCountryName = (name) => {};
  //function that will filter the fetch based on region
  const filterByRegion = (region) => {};
  return (
    <div className="App" id="app">
      <NavBar />
      <>
        <HomePage countries={countries} />
      </>
    </div>
  );
}

export default App;
