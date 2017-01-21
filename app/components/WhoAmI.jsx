import React from 'react'

export const WhoAmI = ({ user, logout }) => (
  <a className="logout" className="mdl-navigation__link" onClick={logout}>{user && user.username}: Logout</a>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
) (WhoAmI)
