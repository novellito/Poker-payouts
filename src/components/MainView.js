import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import Form from './Form';
import { Grid } from 'semantic-ui-react';
import Players from './Players/Players';
import PlayerProfits from './Players/PlayerProfits';
import PlayerPayments from './Players/PlayerPayments';
import { GameContext } from '../context/index';

const Wrapper = styled.div`
  .row.form {
    position: absolute;
    bottom: 30px;
  }
  .ui.centered.grid {
    margin: auto;
  }
  .empty-player-text {
    font-size: 2.8em;
  }
`;
const reducer = (state, action) => {
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
    default:
      return state;
  }
};
const MainView = props => {
  const [players, dispatch] = useReducer(reducer, []);
  const [updatingPlayer, setUpdatingPlayer] = useState(null);
  const gameStarted = true;
  return (
    <Wrapper>
      <GameContext.Provider
        value={{
          gameStarted,
          players,
          updatingPlayer,
          setUpdatingPlayer,
          dispatch
        }}
      >
        <Grid centered container>
          <Grid.Row>
            <Grid.Column verticalAlign="middle">
              {players.length === 0 && (
                <p className="empty-player-text">
                  Add 2 players to start the game
                </p>
              )}
              <Players />
              {/* <PlayerProfits />
              <PlayerPayments /> */}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className="form">
            <Grid.Column verticalAlign="middle">
              <Form />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </GameContext.Provider>
    </Wrapper>
  );
};

export default MainView;
