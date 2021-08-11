import React from "react";
import { useState, useEffect } from "react";
import {  useParams } from "react-router";
import { Link } from "react-router-dom";
import "./CountryDetail.scss";
import { BsArrowLeft } from "react-icons/bs";

const CountryDetail = () => {


  const params = useParams()
  const countryName = params.name
  const [alphaCodes, setAlphaCodes] = useState([]);
  const [country, setCountry] = useState([]);
  const url = `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`;
  const url2 = `https://restcountries.eu/rest/v2/all?fields=name;alpha3Code`

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countryFetched = await response.json();
    setCountry(countryFetched);
    console.log(country);
  };

  const fetchAlphaCodes = async () => {
    const response = await fetch(url2);
    const alphaCodesFetched = await response.json();
    setAlphaCodes(alphaCodesFetched);
    console.log(alphaCodes);
  };

  

  useEffect(() => {
    fetchCountryData()
    fetchAlphaCodes()
  }, [countryName])



  return (
    <main className="country-page">
      <div className="top-page">
          <Link to="/">
            <button className="btn back">
              <BsArrowLeft style={{ verticalAlign: "bottom" }} size={24} /> Back
            </button>  
          </Link>
      </div>
      {country.map(country =>
        <section className="all-details"> 
        <div className="informations">
          <div className="flag-page">
  
            <img id="flagz"src={country.flag} alt={country.name}/>
          </div>
        
            <div className="infdetails">
                <div className="name">
                  <h2>{country.name}</h2>
                </div>
                <div className="container-inf">
                  <div className="details1">
                      <p>
                      <strong>Native Name:</strong> {country.nativeName}
                      </p>
                      <p>
                      <strong>Population:</strong> {country.population}
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
                      <strong>Top Level Domain:</strong> {country.topLevelDomain.toString()}
                      </p>
                      <p>
                      <strong>Currencies: </strong>
                      {country.currencies.map((currency, index, array) =>
                          index === array.length - 1 ? (
                          <span>{currency.name}</span>
                          ) : (
                          <span>{currency.name}, </span>
                          )
                      )}
                      </p>
                      <p>
                      <strong>Languages: </strong>
                      {country.languages.map((language, index, array) =>
                          index === array.length - 1 ? (
                          <span>{language.name}</span>
                          ) : (
                          <span>{language.name}, </span>
                          )
                      )}
                      </p>
                  </div>            
              </div>
            {country.borders.length > 0  &&  <div className="borders">
                <h3>Border Countries:</h3>
                  <div>
                    
                    {alphaCodes.map((c) => {
                      if(country.borders.includes(c.alpha3Code)){
                      return (<Link  to={`/countries/${c.name}`}><button  className="btn border">{c.name}</button></Link>)}
                    }
                    )}
                  </div>
              </div>  }
            </div>              
            
        </div>
      </section>)}  
  </main>
  )

};

export default CountryDetail;
