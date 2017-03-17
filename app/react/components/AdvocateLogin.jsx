/* global componentHandler */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { login } from '../../redux/reducers/auth'
import { setLoginError } from '../../redux/reducers/loginError'

/* ----------------- COMPONENT ------------------ */

class AdvocateLogin extends Component {

  componentDidMount () {
    // To handle material design styling on inputs
    componentHandler.upgradeDom()
    this.props.setLoginError(false)
  }

  render () {
    return (
      <main className="mdl-layout__content">
        <div className="page-content mdl-cell mdl-cell--6-col">
          <h1>Advocate Login</h1>
          <div className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__supporting-text">
              <form action="#" onSubmit={evt => {
                evt.preventDefault()
                this.props.login(evt.target.name.value, evt.target.password.value)
              } }>
                <div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="name" />
                  <label className="mdl-textfield__label" htmlFor="name">E-mail</label>
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
                {
                  this.props.loginError &&
                    (
                      <div className="login-error">
                        <p>Login Failed</p>
                      </div>
                    )
                  }
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

/* ----------------- CONTAINER ------------------ */

const mapStateToProps = state => {
  return {
    loginError: state.loginError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      dispatch(login(username, password))
    },
    setLoginError: (arg) => {
      dispatch(setLoginError(arg))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvocateLogin)
