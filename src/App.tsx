import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mynav from './Components/my-nav';
import Mymap from './Components/my-gmap';



function App() {
  
  return (
    <div>
      <Mynav />
      <div className="map-title">Map marked with areas I would consider relocating to, with preference for remote roles.</div>
      <Mymap />
      
  </div>
);
}

export default App;