import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './MainView';
import logo from '../assets/logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <>
        <img src={logo} className="react-logo" alt="logo" />
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={MainView} />
          {/* <Route exact path="/payouts" component={Payouts} />
          <Route exact path="/winners" component={Winners} />
          <Route exact path="/help" component={Help} />
          <Route exact path="/about" component={About} /> */}
        </Switch>
      </>
    );
  }
}

export default App;
