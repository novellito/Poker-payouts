import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { PrimaryPurple } from '../../constants/AppColors';
import CustomButton from '../CustomButton';
const Wrapper = styled.div`
  margin-top: 40px;
  text-align: center;
  .player-container {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .player-name {
    font-size: 2em;
  }
  .amt {
    color: ${PrimaryPurple};
    position: relative;
    bottom: 10px;
    margin: 0 5px;
    font-weight: bold;
  }
  p {
    margin-bottom: 0;
  }
`;
const Player = (
  <div className="player-container">
    <p className="player-name">Christian</p>
    <div className="amt">
      <p>10$</p>
      <Icon name="arrow alternate circle right outline" size="big" />
    </div>
    <p className="player-name">christian T.</p>
  </div>
);
const PlayerPayouts = props => {
  return (
    <Wrapper>
      {Player}
      {Player}
      {Player}
      <CustomButton
        text="Reset Game"
        click={() => window.location.replace('/')}
      />
    </Wrapper>
  );
};
export default PlayerPayouts;
