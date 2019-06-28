import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import logo from '../assets/logo.svg';

const Wrapper = styled.div`
  text-align: center;
  .react-logo {
    animation: react-logo-spin infinite 20s linear;
    height: 20px;
    pointer-events: none;
    position: relative;
    bottom: -6px;
  }

  @keyframes react-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const About = props => {
  return (
    <Wrapper>
      <h1>About</h1>
      <p>Made by CT + DC</p>
      <span>with </span>
      <span>
        <img src={logo} className="react-logo" alt="logo" />
        and
        <Icon name="heart" size="small" />
      </span>
    </Wrapper>
  );
};

export default About;
