import React from "react";

const Main = ({ data }) => {
  return (
    <div className="main">
      <p className="Location">{data.name}</p>
      <p className="temprature">
        {data.main ? data.main.temp.toFixed(0) - 273 : null}
        <span className="first">o</span>C
      </p>
      <p className="weather">{data.weather ? data.weather[0].main : null}</p>
    </div>
  );
};

export default Main;
