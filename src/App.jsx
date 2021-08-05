import React from 'react'
import Countries from './components/Countries/Countries'
import Header from './components/Header/Header'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/">
        <Countries/>
      </Route>
      <Route path="/countries/:name" children={<CountryDetail />}></Route>
    </Router>
  );
}

export default App;
