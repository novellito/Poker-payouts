import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import MainViewForm from './MainViewForm';
import { Grid } from 'semantic-ui-react';
import Players from './Players/Players';
import PlayerProfits from './Players/PlayerProfits';
import PlayerPayments from './Players/PlayerPayments';
import Modal from './Modal';
import { GameContext } from '../context/index';
import { withRouter } from 'react-router-dom';

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
  const { players, dispatchPlayers, dispatchGame } = useContext(GameContext);
  const [gameStarted, setGameStarted] = useState(false);
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
            {/* <PlayerProfits/> */}
            {/* <PlayerProfits />
              <PlayerPayments /> */}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="form">
          <Grid.Column verticalAlign="middle">
            <MainViewForm
              gameStarted={gameStarted}
              setGameStarted={setGameStarted}
              setModalStatus={() => setModalStatus(true)}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Wrapper>
  );
};

export default withRouter(MainView);
