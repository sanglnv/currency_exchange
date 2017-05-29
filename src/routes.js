import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";

export default () => (
  <Router>
    <div>
      <Route path={'/'} component={Home}/>
      <Route path={'/about'} component={About}/>
    </div>
  </Router>
)