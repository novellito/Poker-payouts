import React, { useContext } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { GameContext } from '../../context';
import {
  PrimaryPurple,
  Danger,
  TertiaryPurple
} from '../../constants/AppColors';
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  .buy-in-amt {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 0.8em;
    color: ${PrimaryPurple};
    line-height: 32px;
    border: 2px solid ${PrimaryPurple};
    background: ${TertiaryPurple};
  }
  .player-name {
    font-size: 2em;
    margin: 0 15px;
  }
  .ui.button {
    &.basic {
      color: ${Danger}!important;
      box-shadow: 0 0 0 1px ${Danger} inset;
    }
    padding: 0.7em 1em;
    font-size: 0.9em;
    margin-right: 0;
    color: white;
  }
  .close {
    color: ${Danger};
    margin-left: 5px;
  }
`;
const Player = props => {
  const { buyIn, name, index } = props;
  const { gameState, dispatchPlayers, dispatchGame } = useContext(GameContext);
  return (
    <Wrapper>
      <Icon
        onClick={() => dispatchPlayers({ type: 'DELETE_PLAYER', index })}
        name="close"
        size="big"
      />
      <div className="buy-in-amt">{buyIn}$</div>
      <p className="player-name">{name}</p>
      {gameState.started ? (
        <Button
          onClick={() =>
            dispatchGame({
              type: 'SET_PLAYER_TO_UPDATE',
              playerToUpdate: { ...props }
            })
          }
          basic
        >
          + Buy In
        </Button>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

export default Player;
