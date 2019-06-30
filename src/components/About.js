import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import logo from '../assets/logo.svg';

const Wrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  h1 {
    font-size: 2.8em;
  }
  p {
    margin-bottom: 0;
    font-size: 1.2em;
  }

  .react-logo {
    animation: react-logo-spin infinite 20s linear;
    height: 20px;
    pointer-events: none;
    position: relative;
    bottom: -6px;
  }
  .icons {
    margin-left: -4px;
    .heart {
      margin-left: 5px;
      color: rgb(255, 120, 174);
      font-size: 1em;
    }
  }
  .git-link {
    margin-top: 10px;
    i {
      font-size: 1.6em;
    }
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
      <span className="icons">
        <img src={logo} className="react-logo" alt="logo" />
        and
        <Icon name="heart" size="small" />
      </span>
      <div className="git-link">
        <a
          href="https://github.com/novellito/Poker-payouts"
          target="_blank"
          alt="Poker payouts github"
          rel="noopener noreferrer"
        >
          <Icon name="github" size="small" />
        </a>
      </div>
    </Wrapper>
  );
};

export default About;
