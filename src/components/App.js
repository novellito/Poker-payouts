import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './MainView';
import './App.css';
import Navbar from './Navbar';
import Help from './Help';
import About from './About';
import PlayerProfits from './Players/PlayerProfits';
import { GameContext } from '../context/index';
import { playersReducer, gameActionsReducer } from '../reducers/reducers';

const App = () => {
  const [players, dispatchPlayers] = useReducer(playersReducer, [
    { name: 'bob', buyIn: 12 },
    { name: 'lol', buyIn: 12 },
    { name: 'bob', buyIn: 12 }
    // { name: 'lol', buyIn: 12 },
    // { name: 'bob', buyIn: 12 },
    // { name: 'lol', buyIn: 12 },
    // { name: 'bob', buyIn: 12 },
    // { name: 'lol', buyIn: 12 },
    // { name: 'bob', buyIn: 12 },
    // { name: 'lol', buyIn: 12 }
  ]);
  const [gameState, dispatchGame] = useReducer(gameActionsReducer, {
    started: false
  });

  return (
    <>
      <Navbar />
      <Switch>
        <GameContext.Provider
          value={{ players, dispatchPlayers, gameState, dispatchGame }}
        >
          <Route exact path="/" component={MainView} />
          <Route exact path="/playerProfits" component={PlayerProfits} />
          {/* <Route exact path="/winners" component={Winners} /> */}
          <Route exact path="/help" component={Help} />
          <Route exact path="/about" component={About} />
        </GameContext.Provider>
      </Switch>
    </>
  );
};

export default App;
