import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/PokerLogo.png';
import { PrimaryPurple, SecondaryPurple } from '../constants/AppColors';
import { Menu, Icon } from 'semantic-ui-react';

const Wrapper = styled.nav`
  .ui.stackable.menu {
    border-radius: 0;
    background-color: ${PrimaryPurple};
    .item:first-child {
      height: 88px;
    }
    .mobile-nav > .item,
    .desktop-nav > .item {
      background-color: ${SecondaryPurple};
      color: white;
      display: flex;
      justify-content: center;
      font-family: 'Rubik', sans-serif;
      height: 65px;
      border-top: solid;
    }
    .desktop-nav {
      display: none;
    }
    .right.item a {
      color: white;
    }
  }
  .content.big.icon.nav-icon,
  .close.big.icon.nav-icon {
    margin-left: auto;
    font-size: 2.6em;
    color: white;
  }
  .logo {
    margin-left: 10px;
  }

  @media (min-width: 768px) {
    .logo {
      margin-left: 20px;
    }
    .ui.stackable.menu {
      align-items: center;
      .desktop-nav {
        display: contents;
        > .item {
          background-color: inherit;
          border: none;
          :last-child {
            margin-right: 20px;
          }
        }
      }
      .mobile-nav {
        display: none;
      }
    }
    .content.big.icon.nav-icon,
    .close.big.icon.nav-icon {
      display: none;
    }
  }
`;

const Navbar = props => {
  const [hidden, setHidden] = useState(true);

  const hideElem = () => {
    setHidden(!hidden);
  };

  const NavLinks = (
    <>
      <Menu.Item position="right">
        <a href="/">Reset Game</a>
      </Menu.Item>
      <Menu.Item
        name="desktop-navimonials"
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
        link
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
  );

  return (
    <Wrapper id="navbar">
      <Menu stackable>
        <Menu.Item>
          <NavLink exact to="/">
            <img className="logo" src={Logo} alt="Poker tracker logo" />
          </NavLink>
          {hidden ? (
            <Icon
              className="nav-icon"
              onClick={hideElem}
              name="content"
              size="big"
            />
          ) : (
            <Icon
              className="nav-icon"
              onClick={hideElem}
              name="close"
              size="big"
            />
          )}
        </Menu.Item>
        {hidden ? '' : <div className="mobile-nav">{NavLinks}</div>}
        <div className="desktop-nav">{NavLinks}</div>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;
