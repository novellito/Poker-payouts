import React, { useContext, useState, useRef } from 'react';
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
  text-align: center;

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
  .ui.label > .icon {
    width: auto;
    margin: 0;
  }
  .expected-total,
  .validated-total {
    font-size: 1.4em;
    margin-bottom: 0;
  }
  .buttons-section {
    margin: 10px 0 20px 0;
  }
  .ui.button {
    background-color: ${PrimaryPurple};
    color: white;
    &:first-of-type {
      margin-right: 10px;
    }
    &.basic {
      color: ${Green}!important;
      box-shadow: 0 0 0 1px ${Green} inset;
    }
    &.danger {
      color: ${Danger}!important;
      box-shadow: 0 0 0 1px ${Danger} inset;
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
  const [isValidPlayerVals, setValaidPlayerVals] = useState(false);
  const { buyIn } = players.reduce((acc, cv) => ({
    buyIn: acc.buyIn + cv.buyIn
  }));
  const [validatedTotal, setValidatedTotal] = useState();

  const validatePlayerTotals = () => {
    const checkedTotal = players
      .filter(elem => elem.finalTotal)
      .reduce((acc, cv) => acc.finalTotal + cv.finalTotal);

    setValidatedTotal(checkedTotal.finalTotal || checkedTotal);
    if (checkedTotal === buyIn) {
      setValaidPlayerVals(true);
    }
  };

  return (
    <Wrapper>
      {players.map((player, index) => (
        <div className="player-totals-container" key={index}>
          {/* <Icon name="arrow alternate circle up outline" size="big" /> */}
          {/* <Icon name="arrow alternate circle down outline" size="big" /> */}
          <p>{player.name}'s final total</p>
          <Input
            size={'mini'}
            // value={players[index].finalTotal }
            onBlur={e => {
              dispatchPlayers({
                type: 'SET_FINAL_TOTAL',
                finalTotal: parseInt(e.target.value),
                playerIndex: index
              });
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
      {validatedTotal && (
        <p className="validated-total">Validtated Total: ${validatedTotal}</p>
      )}
      <p className="expected-total">Expected Total ${buyIn}</p>
      <div className="buttons-section">
        <Button onClick={validatePlayerTotals} basic>
          Validate
        </Button>
        <Button
          // onClick={handleAddButtonClick}
          className="add-btn"
          disabled={!isValidPlayerVals}
        >
          Get Profits
        </Button>
      </div>
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
