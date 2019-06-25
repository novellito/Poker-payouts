import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import { Grid, Container } from 'semantic-ui-react';

const Wrapper = styled.div``;
const MainView = props => {
  return (
    <Wrapper>
      <Grid centered container>
        <Grid.Row>
          <Grid.Column verticalAlign="middle">
            <h1>Add 2 players to start the game</h1>
            <Form />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Wrapper>
  );
};

export default MainView;
