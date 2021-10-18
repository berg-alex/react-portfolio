import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mynav from './Components/my-nav';
// import { initMap } from './Components/gmap-circles';
import Mymap from './Components/gmap-circles';
// import ReactGA from 'react-ga';


function App() {
  
  return (
    <div className="app">
      <Mynav />
      <div className="map-title">
        Map marked with areas I would consider relocating to, 
        with preference for remote roles.
        <br/>
        Open to freelance, contract, direct hire, part-time, full-time.

        Eligible to work in US & UK.
      </div>
      <Mymap />
      {/* { initMap } */}
  </div>
);
}

export default App;