import React, { useState } from "react";
import "./index.css";
import Search from "./components/Search";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [initial, setInitial] = useState(true);

  return (
    <div className="body">
      <div className="container">
        <Search
          location={location}
          setLocation={setLocation}
          setData={setData}
          setInitial={setInitial}
        />
        {!initial && <Main data={data} />}
        {!initial && <Footer data={data} />}
      </div>
    </div>
  );
};

export default App;
