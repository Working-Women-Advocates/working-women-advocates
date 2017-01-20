import React, { Component } from 'react';

export default () => {
  return (
    <header className="mdl-layout__header mdl-layout__header--transparent">
      <div className="mdl-layout__header-row">
        {/* Title */}
        <span className="mdl-layout-title">Working Women Advocates</span>
        {/* Add spacer, to align navigation to the right */}
        <div className="mdl-layout-spacer" />
        {/* Navigation. We hide it in small screens. */}
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href>About</a>
          <a className="mdl-navigation__link" href>Volunteer</a>
          <a className="mdl-navigation__link" href>Mentor Login</a>
          <a className="mdl-navigation__link" href>Working Women Login</a>
        </nav>
      </div>
    </header>
  )
}
