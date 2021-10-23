import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./CountryDetail.scss";
import { BsArrowLeft } from "react-icons/bs";

const CountryDetail = () => {
  const params = useParams();
  const cca3 = params.name;

  const [isLoading, setIsLoading] = useState(true); 
  const [country, setCountry] = useState([]);
  const [namesAndCca3, setNamesAndCca3] = useState([]);
  
  const url = `https://restcountries.com/v3.1/alpha/${cca3}`;
  const urlNamesCca3 = `https://restcountries.com/v3.1/all?fields=name,cca3`;

  const fetchCountry = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountry(data);
    
  }

  const fetchNamesAndCca3 = async () => {
    const response = await fetch(urlNamesCca3);
    const data = await response.json();
    setNamesAndCca3(data);
  }

  useEffect(() => {
    fetchCountry();
    fetchNamesAndCca3();
    setIsLoading(false)
  }, [cca3]);

  if(isLoading){ return <div>Loading...</div>} 

  return (
    <main className="country-page">
      <div className="top-page">
        <Link to="/">
          <button className="btn back">
            <BsArrowLeft style={{ verticalAlign: "bottom" }} size={24} /> Back
          </button>
        </Link>
      </div>
      {country.map((country) => (
        <section className="all-details">
          <div className="informations">
            <div className="flag-page">
              <img id="flagz" src={country.flags.svg} alt={country.name.common} />
            </div>

            <div className="infdetails">
              <div className="name">
                <h2>{country.name.common}</h2>
              </div>
              <div className="container-inf">
                <div className="details1">
                  <p>
                    <strong>Native Name:</strong> {Object.values(country.name.nativeName)[0].common}
                  </p>
                  <p>
                    <strong>Population:</strong>{" "}
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p>
                    <strong>Sub Region:</strong> {country.subregion}
                  </p>
                  <p>
                    <strong>Capital:</strong> {country.capital}
                  </p>
                </div>

                <div className="details2">
                  <p>
                    <strong>Top Level Domain: </strong>
                    {country.tld}
                  </p>
                  <p>
                    <strong>Currencies: </strong>
                    {Object.values(country.currencies).map((currency, index, array) =>
                      index === array.length - 1 ? (
                        <span>{currency.name}</span>
                      ) : (
                        <span>{currency.name}, </span>
                      )
                    )}
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    {Object.values(country.languages).map((language, index, array) =>
                      index === array.length - 1 ? (
                        <span>{language}</span>
                      ) : (
                        <span>{language}, </span>
                      )
                    )
                    }
                  </p>
                </div>
              </div>
              {country.borders && (
                <div className="borders">
                  <h3>Border Countries:</h3>
                  <div>
                    {country.borders.map((c) => {

                         let arr = namesAndCca3.filter(data => data.cca3 === c)
                          console.log(arr[0])
                        return (
                          <Link to={`/countries/${c}`}>
                            <button className="btn border">{arr[0] && arr[0].name.common}</button>
                          </Link>
                        );
                      
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default CountryDetail;
