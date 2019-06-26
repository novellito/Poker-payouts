import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './MainView';
import logo from '../assets/logo.svg';
import './App.css';
import Navbar from './Navbar';
import Help from './Help';
import About from './About';
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <img src={logo} className="react-logo" alt="logo" /> */}
        <Switch>
          <Route exact path="/" component={MainView} />
          {/* <Route exact path="/payouts" component={Payouts} />
          <Route exact path="/winners" component={Winners} /> */}
          <Route exact path="/help" component={Help} />
          <Route exact path="/about" component={About} />
        </Switch>
      </>
    );
  }
}

export default App;
