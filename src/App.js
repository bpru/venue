import React, { Component } from 'react';
import Header from './components/header_footer/Header';
import './resources/styles.css';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';

class App extends Component {
  render() {
    return (
      <div className="App"
        style={{height: '1500px', backgroundColor: 'blue'}}>
        <Header/>
        <Featured/>
        <VenueNfo/>

      </div>
    );
  }
}

export default App;
