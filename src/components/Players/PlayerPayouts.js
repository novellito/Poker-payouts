import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { PrimaryPurple } from '../../constants/AppColors';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .profit {
    font-size: 1.6em;
    margin: 0 10px;
    color: ${PrimaryPurple};
    font-weight: bold;
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
  <>
    <p className="player-name">Christian</p>
    <div className="amt">
      <p>10$</p>
      <Icon name="arrow alternate circle right outline" size="big" />
    </div>
    <p className="player-name">christian T.</p>
  </>
);
const PlayerPayouts = props => {
  return <Wrapper>{Player}</Wrapper>;
};
export default PlayerPayouts;
