import axios from 'axios'
import { dropIssues } from './issues'
import { dropVolunteers } from './volunteers'
import { dropAdvocates } from './advocates'
import { browserHistory } from 'react-router'

import { setLoginError } from './loginError'

const reducer = (state = null, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/local/login',
      { username, password })
      .then(() => browserHistory.push('/available-dashboard'))
      .catch(() => dispatch(setLoginError(true)))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .then(() => dispatch(dropIssues()))
      .then(() => dispatch(dispatch(dropVolunteers())))
      .then(() => dispatch(dropAdvocates()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export const volunteerSignup = (username, email, interest) =>
  dispatch =>
    axios.post('/api/volunteers/',
      { username, email, interest })
      // .then(() => console.log('volunteer signup complete'))
      .catch((err) => alert(err))

export default reducer
