import React, { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.scss";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";

const url = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countriesFetched = await response.json();
    setCountries(countriesFetched);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);
  return (
    <main>
      <div id="filter">
        <Filter />
      </div>

      <div className="grid">
        {countries.map((country) => {
          const { name, population, region, capital, flag, numericCode } =
            country;
          return (
            <Link to={`/countries/${name}`}>
                <Country
                name={name}
                population={population}
                region={region}
                capital={capital}
                flag={flag}
                numericCode={numericCode}
                />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Countries;
