import React from "react";
import axios from "axios";
const UserServices = async () => {
  try {
    const countryData = await axios.get("https://restcountries.com/v2/all");
    // console.log(countryData.data);
    return countryData.data;
  } catch (e) {
    console.log(e);
  }
};

export default UserServices;
