import React from "react";
import "./CountryCard.css";

function CountryCard({ name, flag, abbr }) {
  return (
    <div className="card">
      <img src={flag} alt={`Flag of ${abbr}`} />
      <p>{name}</p>
    </div>
  );
}

export default CountryCard;