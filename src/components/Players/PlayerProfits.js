import React, { useContext, useState } from 'react';
import { Button, Icon, Input } from 'semantic-ui-react';
import styled from 'styled-components';
import { GameContext } from '../../context';
import {
  PrimaryPurple,
  Danger,
  Green,
  TertiaryPurple
} from '../../constants/AppColors';

const Wrapper = styled.div`
  .player-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .profit {
      font-size: 1.6em;
      margin: 0 10px;
      color: ${PrimaryPurple};
    }
    .player-name {
      font-size: 1.9em;
    }
    .down {
      color: ${Danger};
    }
    .up {
      color: ${Green};
    }
  }

  .player-totals-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0 15px 0;
    p {
      margin-bottom: 0;
    }
  }
`;
const Player = (
  <div className="player-container">
    <Icon name="arrow alternate circle up outline" size="big" />
    {/* <Icon name="arrow alternate circle down outline" size="big" /> */}
    <p className="profit">$10</p>
    <p className="player-name">christian T.</p>
  </div>
);
const PlayerProfits = props => {
  const { players, dispatchPlayers } = useContext(GameContext);
  const [expectedTotalPot, setExpectedTotalPot] = useState(
    players.reduce((acc, cv) => acc.buyIn + cv.buyIn)
  );

  return (
    <Wrapper>
      {players.map((player, index) => (
        <div className="player-totals-container" key={index}>
          {/* <Icon name="arrow alternate circle up outline" size="big" /> */}
          {/* <Icon name="arrow alternate circle down outline" size="big" /> */}
          <p>{player.name}'s final total</p>
          <Input
            size={'mini'}
            onBlur={e => {
              dispatchPlayers({
                type: 'SET_FINAL_TOTAL',
                finalTotal: parseInt(e.target.value),
                playerIndex: index
              });
              setExpectedTotalPot(expectedTotalPot - parseInt(e.target.value));
              console.log(players);
            }}
            name="buyin"
            label={{ icon: 'dollar' }}
            type="number"
            placeholder="Amount"
          />
          {/* <p className="profit">$10</p> */}
          {/* <p className="player-name">christian T.</p> */}
        </div>
      ))}
      <p> {expectedTotalPot}</p>

      {/* finish Button here */}
    </Wrapper>
  );
  // {players.map((player, index) => (
  //   <div className="player-container">
  //     <Icon name="arrow alternate circle up outline" size="big" />
  //     {/* <Icon name="arrow alternate circle down outline" size="big" /> */}
  //     <p className="profit">$10</p>
  //     <p className="player-name">christian T.</p>
  //   </div>
  // ))}
};
export default PlayerProfits;
