import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import CountryCard from "./CountryCard";

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://xcountries-backend.azurewebsites.net/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      });
  }, []);

  return (
    <div className="app">
      {error && <p style={{ color: "red" }}>Something went wrong. Please try again later.</p>}
      <div className="grid">
        {countries.map((country) => (
          <CountryCard
            key={country.name}
            name={country.name}
            flag={country.flag}
            abbr={country.abbr}
          />
        ))}
      </div>
    </div>
  );
}

export default App;