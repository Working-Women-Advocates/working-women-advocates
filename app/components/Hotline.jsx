import React, { Component } from 'react';

export default () => {
  return (
    <main className="mdl-layout__content">
      <div className="page-content mdl-cell mdl-cell--6-col">
        <h1>Hotline</h1>
        <div className="card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">Would you believe there isn't one?</h2>
          </div>
          <div className="mdl-card__supporting-text">
            <p>A friend found this: <a href="http://9to5.org/job-survival-helpline/"  target="_blank" rel="noopener noreferrer">Job Survival Helpline</a> but it's currently down. If you know of one, please let me know at rachel@rachelbird.com.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
