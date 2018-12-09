import React, { Component } from 'react';
import './resources/styles.css'

import Header from './components/header-footer/Header';
import Featured from './components/featured/Featured';
import VenueInfo from './components/venue-info/VenueInfo';
import Higlights from './components/higlights/Higlights';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Featured/>
        <VenueInfo/>
        <Higlights/>
      </div>
    );
  }
}

export default App;
