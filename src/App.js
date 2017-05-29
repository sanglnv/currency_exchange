import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import './App.scss';
import asyncRoute from "./components/asyncRoute";

const HomePage = asyncRoute(() => import("./components/Home"), () => import('./reducers/currency'));
const AboutPage = asyncRoute(() => import("./components/About"));

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path={'/'} component={HomePage}/>
      <Route exact path={'/about'} component={AboutPage}/>
    </Switch>
  </div>
);

export default App;
