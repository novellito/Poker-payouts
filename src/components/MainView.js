import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import MainViewForm from './MainViewForm';
import { Grid } from 'semantic-ui-react';
import Players from './Players/Players';
import Modal from './Modal';
import { GameContext } from '../context/index';
import { withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  .ui.centered.grid {
    margin: auto;
  }
  .empty-player-text {
    font-size: 2.8em;
  }
`;

const MainView = props => {
  const { players, dispatchGame } = useContext(GameContext);
  const [isModalOpen, setModalStatus] = useState(false);

  return (
    <Wrapper>
      <Grid centered container>
        <Modal
          showPlayerProfits={() => {
            dispatchGame({ type: 'END_GAME' });
            props.history.push('/playerProfits');
          }}
          open={isModalOpen}
          setModalStatus={() => setModalStatus(false)}
        />
        <Grid.Row>
          <Grid.Column verticalAlign="middle">
            {players.length === 0 && (
              <p className="empty-player-text">
                Add 2 players to start the game
              </p>
            )}
            <Players />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="form">
          <Grid.Column verticalAlign="middle">
            <MainViewForm setModalStatus={() => setModalStatus(true)} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Wrapper>
  );
};

export default withRouter(MainView);
