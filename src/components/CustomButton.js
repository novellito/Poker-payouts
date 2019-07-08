import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { PrimaryPurple, Green, Danger } from '../constants/AppColors';

const MyButton = ({ click, className, disabled, text }) => (
  <Button onClick={() => click()} className={className} disabled={disabled}>
    {text}
  </Button>
);

const StyledButton = styled(MyButton)`
  &.ui.button {
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
`;

const CustomBtn = props => {
  return (
    <>
      <StyledButton
        click={() => props.click()}
        text={props.text}
        className={props.className}
        disabled={props.disabled}
      />
    </>
  );
};

export default CustomBtn;
