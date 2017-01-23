import React, { Component } from 'react';

export default (props) => {
  return (
    <main className="mdl-layout__content">
      <div id="volunteer" className="page-content mdl-cell mdl-cell--6-col">
        <h1>Volunteer</h1>
        <div className="mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">Become an advocate</h2>
          </div>
          <div className="mdl-card__supporting-text">
            <p>Thank you for your interest! Fill out the information below and someone will contact you for an interview soon.</p>
            <form action="#" onSubmit={evt => {
              evt.preventDefault()
              props.signup(evt.target.name.value, evt.target.email.value, evt.target.description.value)
            } }>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="text" id="name" />
                <label className="mdl-textfield__label" htmlFor="name">Name</label>
              </div>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="text" id="email" />
                <label className="mdl-textfield__label" htmlFor="email">Email</label>
              </div>
              <div className="mdl-textfield mdl-js-textfield">
                <input className="mdl-textfield__input" type="textarea" id="description" />
                <label className="mdl-textfield__label" htmlFor="description">Why does this interest you?</label>
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

