import React from "react";
import "./Country.scss";

const Country = (props) => {
  return (
    <div>
      <div className="container">
        <div className="flag-container">
          <img src={props.flag} alt={props.name} />
        </div>
        <div className="country">
          <h3>{props.name}</h3>
          <div className="details">
            <h4>
              Population: <span>{props.population.toLocaleString()}</span>
            </h4>
            <h4>
              Region: <span>{props.region}</span>
            </h4>
            <h4>
              Capital: <span>{props.capital}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
