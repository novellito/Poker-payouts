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
  .add-btn,
  .new-player {
    margin-right: 10px;
  }
  p {
    margin-bottom: 5px;
    font-size: 0.9em;
  }
`;
const MainViewForm = props => {
  const [playerToUpdate, setPlayerToUpdate] = useState(null);
  const [newPlayer, setNewPlayer] = useState(false);
  const { gameStarted, setGameStarted, setModalStatus } = props;
  // const [gameStarted, setGameStarted] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [buyInAmt, setBuyInAmt] = useState('');
  const { players, dispatchPlayers, gameState, dispatchGame } = useContext(
    GameContext
  );

  const handleAddButtonClick = () => {
    if (gameState.playerToUpdate) {
      dispatchPlayers({
        type: 'UPDATE_BUYIN',
        index: gameState.playerToUpdate.index,
        buyIn: buyInAmt
      });
      dispatchGame({ type: 'CLEAR_PLAYER_TO_UPDATE' });
    } else {
      dispatchPlayers({
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
      {(!gameState.started || newPlayer) && (
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
      {(!gameState.started || gameState.playerToUpdate || newPlayer) && (
        <>
          <div className="buyin-amt">
            {gameState.playerToUpdate && (
              <p>Extra Buy In for {gameState.playerToUpdate.name}</p>
            )}
            <Input
              value={buyInAmt}
              onChange={e => setBuyInAmt(e.target.value)}
              name="buyin"
              label={{ icon: 'dollar' }}
              type="number"
              placeholder="Amount"
            />
          </div>
          <Button
            onClick={handleAddButtonClick}
            className="add-btn"
            disabled={!buyInAmt}
          >
            Add
          </Button>
        </>
      )}
      {gameState.started && !gameState.playerToUpdate && !newPlayer && (
        <>
          <Button className="new-player" onClick={() => setNewPlayer(true)}>
            New Player
          </Button>
          <Button onClick={setModalStatus} basic className="danger">
            End Game
          </Button>
        </>
      )}
      {!gameState.started && (
        <Button
          onClick={() => dispatchGame({ type: 'SET_GAME_STARTED' })}
          disabled={players.length < 2}
          basic
        >
          Start
        </Button>
      )}
      {(newPlayer || gameState.playerToUpdate) && (
        <Button
          onClick={() => {
            dispatchGame({ type: 'CLEAR_PLAYER_TO_UPDATE' });
            // setPlayerToUpdate(null);
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

export default MainViewForm;
