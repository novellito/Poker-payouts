import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'semantic-ui-react';
import { PrimaryPurple, Green, Danger } from '../constants/AppColors';
import { GameContext } from '../context';

const Wrapper = styled.div`
  .ui.label > .icon {
    width: auto;
    margin: 0;
  }
  .ui.labeled.input > .label {
    background-color: ${PrimaryPurple};
    color: white;
  }
  .ui.button {
    background-color: ${PrimaryPurple};
    color: white;
    &.basic {
      color: ${Green}!important;
      box-shadow: 0 0 0 1px ${Green} inset;
    }
    &.danger {
      color: ${Danger}!important;
      box-shadow: 0 0 0 1px ${Danger} inset;
    }
  }
  .player-name,
  .buyin-amt {
    margin-bottom: 20px;
  }
  .add-btn {
    margin-right: 10px;
  }
  p {
    margin-bottom: 5px;
    font-size: 0.9em;
  }
`;
const Form = props => {
  const {
    players,
    setUpdatingPlayer,
    updatingPlayer,
    gameStarted,
    dispatch,
    setGameStarted,
    newPlayer,
    setNewPlayer
  } = useContext(GameContext);
  const [playerName, setPlayerName] = useState('');
  const [buyInAmt, setBuyInAmt] = useState('');

  const addPlayer = () => {
    if (updatingPlayer) {
      dispatch({
        type: 'UPDATE_BUYIN',
        index: updatingPlayer.index,
        buyIn: buyInAmt
      });
      setUpdatingPlayer(null);
    } else {
      dispatch({
        type: 'ADD_PLAYER',
        player: { name: playerName, buyIn: buyInAmt }
      });
    }
    setPlayerName('');
    setBuyInAmt('');
    setNewPlayer(false);
  };
  return (
    <Wrapper>
      {(!gameStarted || newPlayer) && (
        <div className="player-name">
          <Input
            value={playerName}
            onChange={e => setPlayerName(e.target.value)}
            label={{ icon: 'user' }}
            type="text"
            placeholder="Player Name"
          />
        </div>
      )}
      {(!gameStarted || updatingPlayer || newPlayer) && (
        <>
          <div className="buyin-amt">
            {updatingPlayer && <p>Extra Buy In for {updatingPlayer.name}</p>}
            <Input
              value={buyInAmt}
              onChange={e => setBuyInAmt(e.target.value)}
              name="buyin"
              label={{ icon: 'dollar' }}
              type="number"
              placeholder="Amount"
            />
          </div>

          <Button onClick={addPlayer} className="add-btn" disabled={!buyInAmt}>
            Add
          </Button>
        </>
      )}
      {gameStarted && !updatingPlayer && !newPlayer && (
        <>
          <Button onClick={() => setNewPlayer(true)}>New Player</Button>
          <Button basic className="danger">
            End Game
          </Button>
        </>
      )}

      {!gameStarted && (
        <Button
          onClick={() => setGameStarted(true)}
          disabled={players.length < 2}
          basic
        >
          Start
        </Button>
      )}

      {(newPlayer || updatingPlayer) && (
        <Button
          onClick={() => {
            setUpdatingPlayer(null);
            setNewPlayer(false);
          }}
          basic
          className="danger"
        >
          Cancel
        </Button>
      )}
    </Wrapper>
  );
};

export default Form;
