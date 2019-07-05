import React, { useContext } from 'react';
import Player from './Player';
import { GameContext } from '../../context';

const Players = props => {
  const { players } = useContext(GameContext);
  return (
    <div>
      {players.map((player, index) => (
        <Player
          name={player.name}
          buyIn={player.buyIn}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
};

export default Players;
