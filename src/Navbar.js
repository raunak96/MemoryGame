import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = (props) => (
  <header>
    <h2><a>Memory Game</a></h2>
    <span><h3>{props.text}</h3></span>
    <nav>
      <li><a onClick={props.onNewGame}>{props.bb}</a></li>
    </nav>
  </header>
);

Navbar.propTypes = {
  onNewGame: PropTypes.func.isRequired
};

export default Navbar;