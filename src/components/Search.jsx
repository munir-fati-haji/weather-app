import React from "react";
import axios from "axios";
import { useState } from "react";

const Search = ({ setLocation, location, setData, setInitial }) => {
  const apiKey = "be78cb159e652ce5bbd098bd08353fe5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  const [cityExists, setCityExists] = useState(false);

  const searchLocation = (event) => {
    event.preventDefault();
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setInitial(false);
        setCityExists(true);
      })
      .catch(() => {
        setCityExists(false);
        setInitial(true);
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
        className={!cityExists ? "cityExists" : null}
      />
    </form>
  );
};

export default Search;
