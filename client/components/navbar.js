import React from 'react';
const sentiment = require('sentiment');
const fleschKincaid = require('flesch-kincaid');
const syllable = require('syllable');

const Navbar = (props) => {

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <h1 className="title is-1 level-item hast-text-centered">Read Between the Lines</h1>
    </div>
  </nav>
  )
}

export default Navbar;
