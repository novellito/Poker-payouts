import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
  text-align: center;
  ul li {
    text-decoration: none;
    margin: 15px;
    text-align: left;
  }
`;
const Help = props => {
  return (
    <Wrapper>
      <h1>Help</h1>
      <ul>
        <li>First add players & then click start.</li>
        <li>
          When a player is out of money they can add more by clicking on the{' '}
          <b>buy in</b> button.
        </li>
        <li>
          Once the game has ended enter the amount of money each player has
          left.{' '}
          <b>
            Note: The players final total should equal the expected prize pool.
          </b>
        </li>
        <li>The final screen will show which player pays who.</li>
      </ul>
    </Wrapper>
  );
};

export default Help;
