import React from "react";
import axios from "axios";

const Search = ({ setLocation, location, setData }) => {
  const apiKey = "be78cb159e652ce5bbd098bd08353fe5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  const searchLocation = (event) => {
    event.preventDefault();
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  return (
    <form className="search" onSubmit={searchLocation}>
      <input
        value={location}
        onChange={(event) => {
          setLocation(event.target.value);
        }}
        type="text"
        placeholder="Enter Location"
      />
    </form>
  );
};

export default Search;
