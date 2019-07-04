import React, { useContext } from 'react';
import Player from './Player';
import { GameContext } from '../../context';
import PlayerProfits from './PlayerProfits';
import PlayerPayments from './PlayerPayments';

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
