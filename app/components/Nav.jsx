import React, { Component } from 'react';
import { Link } from 'react-router';
import WhoAmI from './WhoAmI'

export default (props) => {
  const loggedin = props.auth;
  return (
    <header className={`${ loggedin ? "" : "mdl-layout__header--transparent"} mdl-layout__header`}>
      <div className="mdl-layout__header-row">
        {/* Title */}
        <span className="mdl-layout-title">Working Women Advocates</span>
        {/* Add spacer, to align navigation to the right */}
        <div className="mdl-layout-spacer" />
        {/* Navigation. We hide it in small screens. */}
        <nav className="mdl-navigation">
          <Link to="landing" className="mdl-navigation__link">Home</Link>
          {loggedin ? <Link to="#" className="mdl-navigation__link">Your WW</Link> : ''}
          {loggedin ? <Link to="#" className="mdl-navigation__link">Available WW</Link> : ''}
          {loggedin ? '' : <Link to="about" className="mdl-navigation__link">About</Link>}
          {loggedin ? '' : <Link to="hotline" className="mdl-navigation__link">Hotline</Link>}
          {loggedin ? '' : <Link to="volunteer" className="mdl-navigation__link">Volunteer</Link>}
          {loggedin ? '' : <Link to="mentor-login" className="mdl-navigation__link">Mentor Login</Link>}
          {loggedin ? <WhoAmI /> : <Link to="working-women-signup" className="mdl-navigation__link">Working Women Signup</Link>}
        </nav>
      </div>
    </header>
  )
}
