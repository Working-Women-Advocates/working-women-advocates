import React, { Component } from 'react';
import { Link } from 'react-router';
import {logout} from 'APP/app/reducers/auth'

export default (props) => {
  return (
    <nav className="mdl-navigation">
      {props.auth.role === 'admin' ? <Link to="admin-dashboard" className="mdl-navigation__link">All Cases</Link> : ''}
      {props.auth.role === 'admin' ? <Link to="advocates" className="mdl-navigation__link">Advocates</Link> : ''}
      {props.auth.role === 'admin' ? <Link to="volunteers" className="mdl-navigation__link">Volunteers</Link> : ''}
      <Link to="available-dashboard" className="mdl-navigation__link">Available Cases</Link>
      <Link to="advocate-dashboard" className="mdl-navigation__link">Your Cases</Link>
      <a className="logout mdl-navigation__link" onClick={evt => {
              evt.preventDefault()
              props.logout()
              } }>{props.auth && props.auth.username}: Logout</a>
    </nav>
  )
}
