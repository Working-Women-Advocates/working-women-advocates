import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import LoggedInNav from './LoggedInNav'
import LoggedOutNav from './LoggedOutNav'
import { logout } from '../../redux/reducers/auth'

/* ----------------- COMPONENT ------------------ */

// This is what slides out from the left on the nav
const Drawer = ({ logout, auth }) => {
  const loggedin = auth
  return (
    <div className="mdl-layout__drawer">
      <span className="mdl-layout-title">WWA</span>
      <nav className="mdl-navigation">
        {loggedin ? <LoggedInNav logout={logout} auth={loggedin} /> : <LoggedOutNav />}
      </nav>
    </div>
  )
}

/* ----------------- CONTAINER ------------------ */

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout())
      browserHistory.push('/')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
