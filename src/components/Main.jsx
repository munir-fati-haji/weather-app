import React from "react";

const Main = ({ data }) => {
  return (
    <div className="main">
      <p className="Location">{data.name}</p>
      {data.main ? (
        <p className="temprature">
          {data.main.temp.toFixed(0) - 273}
          <span className="first">o</span>C
        </p>
      ) : null}

      <p className="weather">{data.weather ? data.weather[0].main : null}</p>
    </div>
  );
};

export default Main;
