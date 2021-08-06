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
    <main className="countries-list">
      <div id="filter">
        <Filter />
      </div>

      <div className="grid">
        {countries.map((country, index, array) => {
          const {
            name,
            population,
            region,
            capital,
            flag,
            numericCode,
            topLevelDomain,
            nativeName,
            currencies,
            borders,
            languages,
            subregion,
            
          } = country;
          return (
            <Link
              to={{
                pathname: `/countries/${name}`,
                state: {
                  name: name,
                  population: population,
                  region: region,
                  capital: capital,
                  flag: flag,
                  topLevelDomain: topLevelDomain,
                  nativeName: nativeName,
                  currencies: currencies,
                  borders: borders,
                  languages: languages,
                  subregion: subregion,
                  countries: array,
                },
              }}
            >
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
