import React from 'react'
import LoggedInNav from './LoggedInNav'
import LoggedOutNav from './LoggedOutNav'

// This is what slides out from the left on the nav
export default ({ logout, auth }) => {
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
