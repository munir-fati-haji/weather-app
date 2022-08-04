import React from "react";

const Main = ({ data }) => {
  return (
    <div className="main">
      {data.name && <p className="Location">{data.name}</p>}
      <p className="temprature">
        {data.main && data.main.temp.toFixed(0) - 273}
        <span className="first">o</span>C
      </p>
      <p className="weather">{data.weather && data.weather[0].main}</p>
    </div>
  );
};

export default Main;
