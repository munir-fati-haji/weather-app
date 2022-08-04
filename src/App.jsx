import React, { useState } from "react";
import "./index.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const apiKey = "be78cb159e652ce5bbd098bd08353fe5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
      });
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="search">
          <input
            value={location}
            onChange={(event) => {
              setLocation(event.target.value);
            }}
            onKeyPress={searchLocation}
            type="text"
            placeholder="Enter Location"
          />
        </div>
        <div className="main">
          <p className="Location">{data.name}</p>
          {data.main ? (
            <p className="temprature">
              {data.main.temp.toFixed(0) - 273}
              <span className="first">o</span>C
            </p>
          ) : null}

          <p className="weather">
            {data.weather ? data.weather[0].main : null}
          </p>
        </div>
        <div className="footer">
          <div>
            <p className="fellTemp">
              {data.main ? data.main.feels_like.toFixed(0) - 273 : null}
              <span className="second">o</span>C
            </p>
            <p className="fells">Feels Like</p>
          </div>
          <div>
            <p className="humdityTemp">
              {data.main ? data.main.humidity : null}%
            </p>
            <p className="humidity">Humidity</p>
          </div>
          <div>
            <p className="windspeedValue">
              {data.wind ? data.wind.speed.toFixed(0) : null}MPH
            </p>
            <p className="windspeed">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
