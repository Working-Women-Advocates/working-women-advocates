import React, { Component } from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <main className="mdl-layout__content">
      <div id="landing-page" className="page-content">
        <h1>Working Women Advocates</h1>
        <h6 className="mdl-cell mdl-cell--6-col">If you are experiencing difficulties at work, you may need an advocate. We are here for you and respct your privacy.</h6>
        <div className="get-started">
          <Link to="working-women-signup" className="get-started-btn mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Get Started</Link>
        </div>
      </div>
    </main>
  )
}
