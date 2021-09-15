import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './Components/contact';
import Skills from './Components/skills';
import video from "./assets/video-digital-info.mp4";

ReactDOM.render(
  <div>
  <HashRouter basename="/">
    <Switch>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
            <Route exact path="/">
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
