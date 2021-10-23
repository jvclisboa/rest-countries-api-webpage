import React, { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.scss";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";



const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true); 
  const [option, setOption] = useState('')
  const url = "https://restcountries.com/v3.1/all";
  
  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countriesFetched = await response.json();
    setCountries(countriesFetched);
    console.log(countries)
  };

  // // useEffect(() => {
    
  // //   fetchCountryData();

  // // }, []);

  useEffect(() => {
    fetchCountryData();
    setIsLoading(false);
  
  }, [])

  const handleChange = (newValue) => {
    setSearchTerm(newValue)
  }

  const handleOptionChange = (newOption) => {
    setOption(newOption)
  }

  if(isLoading){return <div>Loading...</div>}
  return (
    <main className="countries-list">
      <div id="filter">
        <Filter searchTerm={searchTerm} option={option} onChange={handleChange} onOptionChange={handleOptionChange} />
      </div>

      <div className="grid">
        {countries.filter(val => {
          if (searchTerm === "" ) {
            return val
          } else if (val.name.common.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).filter(country => {
          if (option === '' || option === 'Filter by Region') {
            return country
          } else if(country.region === option) {
            console.log(option)
            return country
          }
        })
        .map((country, index, _array) => {
          const {
            name,
            population,
            region,
            capital,
            flags,
            cca3
            
          } = country;
          return (
            <Link
              to={{
                pathname: `/countries/${cca3}`,
              }}
              key={index}
            >
              <Country
                
                name={name.common}
                population={population}
                region={region}
                capital={capital}
                flag={flags.svg}

              />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Countries;
