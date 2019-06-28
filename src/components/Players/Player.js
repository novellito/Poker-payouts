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
  return (
    <Wrapper>
      <Icon
        //   onClick={hideElem}
        name="close"
        size="big"
      />
      <div className="buy-in-amt">20$</div>
      <p className="player-name">christian T.</p>
      <Button basic>+ Buy In</Button>
    </Wrapper>
  );
};

export default Player;
