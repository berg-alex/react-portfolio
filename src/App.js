import React from 'react';
// import video from "./assets/video-digital-info.mp4";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mynav from './Components/my-nav';
import Mymap from './Components/my-gmap';
// import Skills from './Components/Skills';
// import Qualifications from './Components/Qualifications';



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