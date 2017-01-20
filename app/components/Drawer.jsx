import React, { Component } from 'react';

// This is what slides out from the left on the nav
export default () => {
  return (
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">WWA</span>
      <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href>About</a>
        <a className="mdl-navigation__link" href>Volunteer</a>
        <a className="mdl-navigation__link" href>Mentor Login</a>
        <a className="mdl-navigation__link" href>Working Women Login</a>
      </nav>
    </div>
  )
}
