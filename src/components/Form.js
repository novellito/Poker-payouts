import React from 'react';
import styled from 'styled-components';
import { Input, Label, Grid, Button } from 'semantic-ui-react';
import { PrimaryPurple, Green } from '../constants/AppColors';

const Wrapper = styled.div`
  .ui.label > .icon {
    width: auto;
    margin: 0;
  }
  .ui.labeled.input > .label {
    background-color: ${PrimaryPurple};
    color: white;
  }
  .ui.button {
    background-color: ${PrimaryPurple};
    color: white;
    &.basic {
      color: ${Green}!important;
      box-shadow: 0 0 0 1px ${Green} inset;
    }
  }
`;
const Form = props => {
  return (
    <Wrapper>
      <div className="player-name">
        <Input label={{ icon: 'user' }} type="text" placeholder="Player Name" />
      </div>
      <div className="buyin-amt">
        <Input label={{ icon: 'dollar' }} type="number" placeholder="Amount" />
      </div>

      <Button>Add</Button>
      <Button basic>Start</Button>
    </Wrapper>
  );
};

export default Form;
