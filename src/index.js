import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './Components/contact';

ReactDOM.render(
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
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
