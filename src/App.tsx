import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mynav from './Components/my-nav';
// import { initMap } from './Components/gmap-circles';
import Mymap from './Components/gmap-circles';
import ReactGA from 'react-ga';


ReactGA.initialize('G-ZKM4XXDV06', { standardImplementation: true });
// ReactGA.pageview(window.location.pathname + window.location.search);


function App() {
  
  return (
    <div>
      <Mynav />
      <div className="map-title">Map marked with areas I would consider relocating to, with preference for remote roles.</div>
      <Mymap />
      {/* { initMap } */}
  </div>
);
}

export default App;