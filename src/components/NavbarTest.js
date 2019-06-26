import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/PokerLogo.png';
import { PrimaryPurple, SecondaryPurple } from '../constants/AppColors';
import { Menu, Icon } from 'semantic-ui-react';

const Wrapper = styled.nav`
  .ui.stackable.menu {
    background-color: ${PrimaryPurple};
    border-radius: 0;
    .item {
      color: white;
      display: flex;
      justify-content: center;
      font-family: 'Rubik', sans-serif;
      height: 65px;
      border-top: solid;
      /* padding: 20px; */
      &:not(:first-child) {
        background-color: ${SecondaryPurple};
      }
      &:first-child {
        border: none;
        height: 80px;
      }
    }
  }
  .content.big.icon.hamburger {
    margin-left: auto;
  }
`;

const Navbar = props => {
  const [hidden, setHidden] = useState(true);

  const hideElem = () => {
    setHidden(!hidden);
  };

  return (
    <Wrapper id="navbar">
      <Menu stackable>
        <Menu.Item>
          <NavLink exact to="/">
            <img src={Logo} alt="Poker tracker logo" />
          </NavLink>
          <Icon
            className="hamburger"
            onClick={hideElem}
            name="content"
            size="big"
          />
        </Menu.Item>
        {hidden ? (
          ''
        ) : (
          <>
            <Menu.Item>Reset Game</Menu.Item>

            <Menu.Item
              name="testimonials"
              as={() => (
                <NavLink
                  exact
                  className="item"
                  activeClassName="nav-active"
                  to="/help"
                  onClick={hideElem}
                >
                  Help
                </NavLink>
              )}
            />
            <Menu.Item
              as={() => (
                <NavLink
                  exact
                  className="item"
                  activeClassName="nav-active"
                  to="/about"
                  onClick={hideElem}
                >
                  About
                </NavLink>
              )}
            />
          </>
        )}
      </Menu>
    </Wrapper>
  );
};

export default Navbar;
