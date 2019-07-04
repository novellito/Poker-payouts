import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './MainView';
import './App.css';
import Navbar from './Navbar';
import Help from './Help';
import About from './About';
import { GameContext } from '../context/index';
import PlayerProfits from './Players/PlayerProfits';
const playersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [...state, action.player];

    case 'UPDATE_BUYIN':
      state[action.index].buyIn =
        parseInt(state[action.index].buyIn) + parseInt(action.buyIn);

      return [...state];

    case 'DELETE_PLAYER':
      const newState = [...state];
      newState.splice(action.index, 1);
      return newState;
    case 'SET_FINAL_TOTAL':
      // const newState = [...state];
      // newState.splice(action.index, 1);
      state[action.playerIndex].finalTotal = action.finalTotal;

      return state;
    // return newState;
    default:
      return state;
  }
};

const gameActionsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_GAME_STARTED':
      return { ...state, started: true };
    case 'END_GAME':
      return { ...state, started: false };
    case 'SET_PLAYER_TO_UPDATE':
      console.log(action.playerToUpdate);
      return { ...state, playerToUpdate: action.playerToUpdate };
    case 'CLEAR_PLAYER_TO_UPDATE':
      return { ...state, playerToUpdate: null };

    default:
      return state;
  }
};

const App = () => {
  const [players, dispatchPlayers] = useReducer(playersReducer, [
    { name: 'bob', buyIn: 12 },
    { name: 'lol', buyIn: 12 }
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
