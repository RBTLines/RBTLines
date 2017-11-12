import React from 'react';
import Main from './main'

const Navbar = () => {

  return (
    <div>
      <Main />
      <div className="color">
        <div className="container has-text-centered">
          <h1 className="is-size-1">See what people are</h1>
          <h1 className="is-size-1">REALLY</h1>
          <h1 className="is-size-1">thinking when they tweet</h1>
          <img className="thinking-man" src="https://cdn.worldvectorlogo.com/logos/twitter-4.svg" />
        </div>
      </div>
    </div>
  )
}

export default Navbar;
