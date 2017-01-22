import React, { Component } from 'react';

export default (props) => {
  return (
    <main className="mdl-layout__content">
      <div id="volunteer" className="page-content mdl-cell mdl-cell--6-col">
        <h1>Advocate Login</h1>
        <div className="mdl-card mdl-shadow--2dp">
          <div className="mdl-card__supporting-text">
            <form action="#" onSubmit={evt => {
              evt.preventDefault()
              props.login(evt.target.name.value, evt.target.password.value)
            } }>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="text" id="name" />
                <label className="mdl-textfield__label" htmlFor="name">Name</label>
              </div>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="password" id="password" />
                <label className="mdl-textfield__label" htmlFor="password">Password</label>
              </div>
              <div className="get-started">
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
