import React from "react";
import { useLocation } from "react-router";
import "./CountryDetail.scss";
import { BsArrowLeft } from "react-icons/bs";

const CountryDetail = () => {
  const location = useLocation();
  const {
    name,
    population,
    region,
    capital,
    flag,
    topLevelDomain,
    nativeName,
    currencies,
    borders,
    languages,
    subregion,
    countries,
  } = location.state;

  let borderCountries = countries.filter((country) =>
    borders.includes(country.alpha3Code)
  );

  return (
    <main className="country-page">
        <div className="top-page">
            <button className="btn back">
              <BsArrowLeft style={{ verticalAlign: "bottom" }} size={24} /> Back
            </button>  
        </div>
      <section className="all-details"> 
        <div className="informations">
          <div className="flag-page">

            <img id="flagz"src={flag} alt={name}/>
          </div>
         
            <div className="infdetails">
                <div className="name">
                  <h2>{name}</h2>
                </div>
                <div className="container-inf">
                  <div className="details1">
                      <p>
                      <strong>Native Name:</strong> {nativeName}
                      </p>
                      <p>
                      <strong>Population:</strong> {population}
                      </p>
                      <p>
                      <strong>Region:</strong> {region}
                      </p>
                      <p>
                      <strong>Sub Region:</strong> {subregion}
                      </p>
                      <p>
                      <strong>Capital:</strong> {capital}
                      </p>
                  </div>

                  <div className="details2">
                      <p>
                      <strong>Top Level Domain:</strong> {topLevelDomain.toString()}
                      </p>
                      <p>
                      <strong>Currencies: </strong>
                      {currencies.map((currency, index, array) =>
                          index === array.length - 1 ? (
                          <span>{currency.name}</span>
                          ) : (
                          <span>{currency.name}, </span>
                          )
                      )}
                      </p>
                      <p>
                      <strong>Languages: </strong>
                      {languages.map((language, index, array) =>
                          index === array.length - 1 ? (
                          <span>{language.name}</span>
                          ) : (
                          <span>{language.name}, </span>
                          )
                      )}
                      </p>
                  </div>            
              </div>
              <div class="borders">
                <h3>Border Countries:</h3>
                  <div>
                    {" "}
                    {borderCountries.map((country) => (
                      <button className="btn border">{country.name}</button>
                    ))}{" "}
                  </div>
            </div>  
            </div>              
            
        </div>
      </section>
    </main>
  );
};

export default CountryDetail;
