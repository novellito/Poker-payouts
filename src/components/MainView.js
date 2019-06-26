import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import { Grid } from 'semantic-ui-react';

const Wrapper = styled.div`
  .row.form {
    position: absolute;
    bottom: 30px;
  }
  .ui.centered.grid {
    margin: auto;
  }
  .empty-player-text {
    font-size: 2.8em;
  }
`;
const MainView = props => {
  return (
    <Wrapper>
      <Grid centered container>
        <Grid.Row>
          <Grid.Column verticalAlign="middle">
            <p className="empty-player-text">Add 2 players to start the game</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="form">
          <Grid.Column verticalAlign="middle">
            <Form />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Wrapper>
  );
};

export default MainView;
