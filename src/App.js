import React, { Component } from 'react';
import './resources/styles.css'

import Header from './components/header-footer/Header';
import Featured from './components/featured/Featured';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px", background:'red'}}>
        <Header></Header>
        <Featured/>
      </div>
    );
  }
}

export default App;
