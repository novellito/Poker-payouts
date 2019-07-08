import React, { useContext, useState } from 'react';
import { Icon, Input } from 'semantic-ui-react';
import CustomButton from '../CustomButton';
import styled from 'styled-components';
import { GameContext } from '../../context';
import { PrimaryPurple, Danger, Green } from '../../constants/AppColors';

const Wrapper = styled.div`
  text-align: center;

  .player-container {
    margin-top: 10px;
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
`;
const PlayerProfits = props => {
  const { players, dispatchPlayers } = useContext(GameContext);
  const [isValidPlayerVals, setValaidPlayerVals] = useState(false);
  const { buyIn } = players.reduce((acc, cv) => ({
    buyIn: acc.buyIn + cv.buyIn
  }));
  const [validatedTotal, setValidatedTotal] = useState();
  const [isPlayerProfitsShown, setShowPlayerProfits] = useState(false);

  const validatePlayerTotals = () => {
    const { finalTotal } = players
      .filter(elem => elem.finalTotal)
      .reduce((acc, cv) => ({ finalTotal: acc.finalTotal + cv.finalTotal }), {
        finalTotal: 0
      });
    setValidatedTotal(finalTotal);

    if (finalTotal === buyIn) {
      setValaidPlayerVals(true);
    }
  };

  const showPlayerProfits = () => {
    setShowPlayerProfits(true);
  };

  return (
    <Wrapper>
      {!isPlayerProfitsShown && (
        <>
          {players.map((player, index) => (
            <div className="player-totals-container" key={index}>
              <p>{player.name}'s final total</p>
              <Input
                size={'mini'}
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
            </div>
          ))}
          {(validatedTotal || validatedTotal === 0) && (
            <p className="validated-total">
              Validtated Total: ${validatedTotal}
            </p>
          )}
          <p className="expected-total">Expected Total ${buyIn}</p>
          <div className="buttons-section">
            <CustomButton
              click={validatePlayerTotals}
              text="Validate"
              className="basic"
            />
            <CustomButton
              click={showPlayerProfits}
              text="Get Profits"
              disabled={!isValidPlayerVals}
            />
          </div>
        </>
      )}

      {isPlayerProfitsShown && (
        <>
          {players.map((player, index) => (
            <div className="player-container" key={index}>
              {player.finalTotal - player.buyIn > 0 ? (
                <Icon name="arrow alternate circle up outline" size="big" />
              ) : (
                <Icon name="arrow alternate circle down outline" size="big" />
              )}
              <p className="profit">
                ${Math.abs(player.finalTotal - player.buyIn)}
              </p>
              <p className="player-name">christian T.</p>
            </div>
          ))}
          <CustomButton
            // click={showPlayerProfits}
            text="Payouts Page"
          />
        </>
      )}
    </Wrapper>
  );
};
export default PlayerProfits;
