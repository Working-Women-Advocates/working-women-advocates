import React, { Component } from 'react';

export default () => {
  return (
    <main className="mdl-layout__content">
      <div className="page-content mdl-cell mdl-cell--6-col">
        <h1>About</h1>
        <div className="card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__supporting-text">
            <p>Working Women Advocates are here to help you through difficulties at work including, but not limited to:</p>

            <ul className='mdl-list'>
              <li className="mdl-list__item">Harassment</li>
              <li className="mdl-list__item">Sexism</li>
              <li className="mdl-list__item">Exclusion</li>
              <li className="mdl-list__item">Discrimination</li>
              <li className="mdl-list__item">Assault</li>
            </ul>

            <p>When you experience these types of problems, it can be difficult to find guidance to navigate your way through. Working Women Advocates are trained to provide emotional support, as well as come up with a plan to best handle your particular situation. They will be there with you as you execute the plan, and available until you are well into your healing process.</p>

            <p>Your privacy and security are of utmost importance. You will never be asked for identifying information.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
