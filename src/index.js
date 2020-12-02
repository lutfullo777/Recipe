import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Register from './Register';
import './App.css';
import Navbar from './navbar/nav';
import Foods from './foods';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/nav" component={Navbar}/>
        <Route path="/register" component={Register}/>
        <Route path="/foods" component={Foods}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
