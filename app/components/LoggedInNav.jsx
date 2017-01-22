import React, { Component } from 'react';
import { Link } from 'react-router';
import {logout} from 'APP/app/reducers/auth'

export default (props) => {
  return (
    <nav className="mdl-navigation">
      <Link to="dashboard" className="mdl-navigation__link">Your WW</Link>
      <Link to="dashboard" className="mdl-navigation__link">Available WW</Link>
      <a className="logout mdl-navigation__link" onClick={evt => {
              evt.preventDefault()
              props.logout()
              } }>{props.auth && props.auth.username}: Logout</a>
    </nav>
  )
}
