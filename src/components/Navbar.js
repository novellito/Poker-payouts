import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/PokerLogo.png';
import { PrimaryPurple, SecondaryPurple } from '../constants/AppColors';

const Wrapper = styled.nav`
  background-color: ${PrimaryPurple};
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  img {
    margin: 10px 25px;
  }
  a {
    color: white;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: ${SecondaryPurple};
    li {
      a {
        border-top: solid;
        display: block;
        padding: 20px 20px;
        text-decoration: none;
      }
      &:first-of-type a {
        border-top: none;
      }
      &:hover {
        background-color: ${PrimaryPurple};
        transition: 0.2s;
        &:first-of-type a {
          border-top: solid;
        }
      }
    }
  }

  .menu {
    max-height: 0;
    transition: max-height 0.2s ease-out;
    text-align: center;
  }

  .menu-icon {
    cursor: pointer;
    float: right;
    padding: 28px 20px;
    margin: 10px 15px;
    .navicon {
      background: white;
      display: block;
      height: 5px;
      position: relative;
      width: 33px;
      border-radius: 25px;
      :before,
      :after {
        border-radius: 25px;
        background: white;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: all 0.2s ease-out;
        width: 100%;
      }
      :before {
        top: 10px;
      }
      :after {
        top: -10px;
      }
    }
  }

  .menu-btn {
    display: none;
    :checked ~ .menu {
      max-height: 240px;
    }
    :checked ~ .menu-icon .navicon {
      background: transparent;
    }
    :checked ~ .menu-icon .navicon:before {
      transform: rotate(-45deg);
    }
    :checked ~ .menu-icon .navicon:after {
      transform: rotate(45deg);
    }
    :checked ~ .menu-icon:not(.steps) .navicon:before,
    :checked ~ .menu-icon:not(.steps) .navicon:after {
      top: 0;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    padding: 10px 30px;
    img {
      margin: 0;
    }
    ul {
      li {
        float: left;
        &:hover:first-of-type a {
          border-top: none;
        }
        a {
          border-top: none;
          padding: 20px 30px;
          font-size: 1.2em;
        }
      }
    }
    .menu {
      margin-left: auto;
    }
    .menu-icon {
      display: none;
    }
  }
`;

const Navbar = props => {
  return (
    <Wrapper id="navbar">
      <NavLink exact activeClassName="nav-active" to="/">
        <img src={Logo} alt="Poker tracker logo" />
      </NavLink>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon" />
      </label>
      <ul className="menu">
        <li>
          <a href="#work">Reset Game</a>
        </li>
        <li>
          <NavLink exact activeClassName="nav-active" to="/help">
            Help
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="nav-active" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Navbar;
