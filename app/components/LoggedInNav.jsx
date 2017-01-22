import React, { Component } from 'react';
import { Link } from 'react-router';
import WhoAmI from './WhoAmI'

export default () => {
  return (
    <nav className="mdl-navigation">
      <Link to="dashboard" className="mdl-navigation__link">Your WW</Link>
      <Link to="dashboard" className="mdl-navigation__link">Available WW</Link>
      <WhoAmI />
    </nav>
  )
}
