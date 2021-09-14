import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './Components/contact';
import video from "./assets/video-digital-info.mp4";

ReactDOM.render(
  <div>
  <HashRouter basename="/">
    <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            {/* <Route path="/about">
              <About />
            </Route> */}
            <Route path="/">
              <App />
            </Route>
        </Switch>
  </HashRouter>
  <video id="bg-vid" width="100vw" opacity="60" autoPlay loop muted >
      <source src={video} type="video/mp4" poster="./assets/bg-poster.png"/>

      Sorry, your browser doesn't support embedded videos.
    </video> 
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
