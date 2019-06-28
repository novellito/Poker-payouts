import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'semantic-ui-react';
import { PrimaryPurple, Green, Danger } from '../constants/AppColors';

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
    &.danger {
      color: ${Danger}!important;
      box-shadow: 0 0 0 1px ${Danger} inset;
    }
  }
  .player-name,
  .buyin-amt {
    margin-bottom: 20px;
  }
  .add-btn {
    margin-right: 10px;
  }
  p {
    margin-bottom: 5px;
    font-size: 0.9em;
    position: relative;
    right: 69px;
  }
`;
const Form = props => {
  return (
    <Wrapper>
      <div className="player-name">
        <Input label={{ icon: 'user' }} type="text" placeholder="Player Name" />
      </div>
      <div className="buyin-amt">
        {/* <p>Extra Buy In</p> */}
        <Input
          name="buyin"
          label={{ icon: 'dollar' }}
          type="number"
          placeholder="Amount"
        />
      </div>

      <Button className="add-btn">Add</Button>
      {/* <Button>New Player</Button> */}
      {/* <Button className="danger" basic>
        Cancel
      </Button> */}
      <Button basic>Start</Button>
      {/* <Button basic className="danger">
        End Game
      </Button> */}
    </Wrapper>
  );
};

export default Form;
