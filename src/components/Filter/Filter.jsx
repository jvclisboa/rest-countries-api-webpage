import React from "react";
import './Filter.scss'
import {BiSearchAlt2} from 'react-icons/bi'

const Filter = (props) => {
 

  return (
    <section className="filter">
      <form className="form=control">
        <i><BiSearchAlt2 size={24}/></i>
        <input
          type="text"
          placeholder="Search for a country..."
          value={props.searchTerm}
          onChange={(event) => {
            props.onChange(event.target.value)
            console.log(props.searchTerm)
          }} />
        
      </form>

      <div>
          <select name="select" id="select" className="select">
              <option value="Filter by Region" defaultValue>Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
          </select>
      </div>
    </section>
  );
};

export default Filter;
