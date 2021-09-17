import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mynav from './Components/my-nav';
import Mymap from './Components/my-gmap';



function App() {
  
  return (
    <div>
      <Mynav />
      <Mymap />

    {/* <video id="bg-vid" width="100vw" opacity="60" autoPlay loop muted >
      <source src={video} type="video/mp4" poster="./assets/bg-poster.png"/>

      Sorry, your browser doesn't support embedded videos.
    </video>  */}
  </div>
);
}

export default App;