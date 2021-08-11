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
    console.log(countries)
  };

  useEffect(() => {
    fetchCountryData();
  }, []);
  return (
    <main className="countries-list">
      <div id="filter">
        <Filter />
      </div>

      <div className="grid">
        {countries.map((country, _index, array) => {
          const {
            name,
            population,
            region,
            capital,
            flag,
            alpha3Code,
            
          } = country;
          return (
            <Link
              to={{
                pathname: `/countries/${name}`,
              }}
            >
              <Country
                name={name}
                population={population}
                region={region}
                capital={capital}
                flag={flag}
                alpha3Code={alpha3Code}
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Countries;
