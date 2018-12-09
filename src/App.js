import React, { Component } from 'react';
import './resources/styles.css'
import { Element } from 'react-scroll';

import Header from './components/header-footer/Header';
import Featured from './components/featured/Featured';
import VenueInfo from './components/venue-info/VenueInfo';
import Higlights from './components/higlights/Higlights';
import Pricing from  './components/pricing';
import Location from './components/location';
import Footer from './components/header-footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Element name="Featured">
        <Featured/>
        </Element>
        <Element  name="Venue INFO">
        <VenueInfo/>
        </Element>
        <Element name="Higlights">
          <Higlights/>
        </Element>
        <Element name="Pricing">
        <Pricing/>
        </Element>
        <Element name="Location">
        <Location/>
        </Element>
        <Footer/>
      </div>
);
  }
}

export default App;
