import React, { Component } from 'react';
import { Link } from 'react-router';
import LoggedInNav from './LoggedInNav'
import LoggedOutNav from './LoggedOutNav'

export default ({logout, auth}) => {
  const loggedin = auth;
  return (
    <header className={`${ loggedin ? "" : "mdl-layout__header--transparent"} mdl-layout__header`}>
      <div className="mdl-layout__header-row">
        {/* Title */}
        <span className="mdl-layout-title">Working Women Advocates</span>
        {/* Add spacer, to align navigation to the right */}
        <div className="mdl-layout-spacer" />
        {/* Navigation. We hide it in small screens. */}
        {loggedin ? <LoggedInNav logout={logout} auth={loggedin} /> : <LoggedOutNav />}
      </div>
    </header>
  )
}
