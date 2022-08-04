import React from "react";

const Footer = ({ data }) => {
  return (
    <div className="footer">
      <div>
        <p>
          {data.main ? data.main.feels_like.toFixed(0) - 273 : null}
          <span className="second">o</span>C
        </p>
        <p>Feels Like</p>
      </div>
      <div>
        <p>{data.main ? data.main.humidity : null}%</p>
        <p>Humidity</p>
      </div>
      <div>
        <p>{data.wind ? data.wind.speed.toFixed(0) : null}MPH</p>
        <p>Wind Speed</p>
      </div>
    </div>
  );
};

export default Footer;
