import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import {
  PrimaryPurple,
  Danger,
  Green,
  TertiaryPurple
} from '../../constants/AppColors';

const Wrapper = styled.div`
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
`;
const Player = (
  <>
    <Icon name="arrow alternate circle up outline" size="big" />
    {/* <Icon name="arrow alternate circle down outline" size="big" /> */}
    <p className="profit">$10</p>
    <p className="player-name">christian T.</p>
  </>
);
const PlayerProfits = props => {
  return <Wrapper>{Player}</Wrapper>;
};
export default PlayerProfits;
