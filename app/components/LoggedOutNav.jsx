import React, { Component } from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <nav className="mdl-navigation">
      <Link to="landing" className="mdl-navigation__link">Home</Link>
      <Link to="about" className="mdl-navigation__link">About</Link>
      <Link to="hotline" className="mdl-navigation__link">Hotline</Link>
      <Link to="volunteer" className="mdl-navigation__link">Volunteer</Link>
      <Link to="advocate-login" className="mdl-navigation__link">Advocate Login</Link>
      <Link to="working-women-signup" className="mdl-navigation__link">Working Women Signup</Link>
    </nav>
  )
}
