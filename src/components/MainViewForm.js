import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';
import { PrimaryPurple } from '../constants/AppColors';
import { GameContext } from '../context';
import CustomButton from './CustomButton';

const Wrapper = styled.div`
  .ui.label > .icon {
    width: auto;
    margin: 0;
  }
  .ui.labeled.input > .label {
    background-color: ${PrimaryPurple};
    color: white;
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
  const { setModalStatus } = props;
  const [newPlayer, setNewPlayer] = useState(false);
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
          <CustomButton
            click={handleAddButtonClick}
            text="Add"
            disabled={!buyInAmt}
          />
        </>
      )}
      {gameState.started && !gameState.playerToUpdate && !newPlayer && (
        <>
          <CustomButton click={() => setNewPlayer(true)} text="New Player" />
          <CustomButton
            click={setModalStatus}
            text="End Game"
            className="basic danger"
          />
        </>
      )}
      {!gameState.started && (
        <CustomButton
          click={() => dispatchGame({ type: 'SET_GAME_STARTED' })}
          text="Start"
          disabled={players.length < 2}
          className="basic"
        />
      )}
      {(newPlayer || gameState.playerToUpdate) && (
        <CustomButton
          click={() => {
            dispatchGame({ type: 'CLEAR_PLAYER_TO_UPDATE' });
            setNewPlayer(false);
          }}
          text="Cancel"
          className="basic danger"
        />
      )}
    </Wrapper>
  );
};

export default MainViewForm;
