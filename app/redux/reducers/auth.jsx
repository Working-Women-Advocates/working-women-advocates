import Immutable from 'immutable'
import axios from 'axios'
import { dropIssues } from './issues'
import { browserHistory } from 'react-router'
import { dropVolunteers } from './volunteers'
import { dropAdvocates } from './advocates'

/* --------------- INITIAL STATE --------------- */

const initialState = null

/* --------------- ACTIONS --------------- */

const AUTHENTICATED = 'AUTHENTICATED'

/* --------------- ACTION CREATORS --------------- */

export const authenticated = user => ({
  type: AUTHENTICATED,
  user
})

/* --------------- ASYNC ACTION CREATORS --------------- */

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/local/login',
      { username, password })
      .then((res) => {
        if (res.data.id) browserHistory.push('/available-dashboard')
        // else throw alert
      })
      .catch((err) => {
        console.error(err)
      })

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .then(() => dispatch(dropIssues()))
      .then(() => dispatch(dispatch(dropVolunteers())))
      .then(() => dispatch(dropAdvocates()))
      .catch(() => dispatch(whoami()))

// If the whoami route comes back with an actual user, then use that user
// If it comes back with an empty object, then set user to null
// This makes checking if a user exists elsewhere much easier - we only have to check
// for whether or not it's truthy, rather than if it has properties on it
// Also semantically it makes a little more sense
export const whoami = () =>
  dispatch => {
    let user
    axios.get('/api/auth/whoami')
      .then(res => {
        if (Object.keys(res.data).length) user = Immutable.Map(res.data)
        else user = null
        dispatch(authenticated(user))
      })
      .catch((err) => alert(err)) // eslint-disable-line no-undef
  }

export const volunteerSignup = (username, email, interest) =>
  dispatch =>
    axios.post('/api/volunteers/',
      { username, email, interest })
      .catch((err) => alert(err)) // eslint-disable-line no-undef

/* --------------- REDUCER --------------- */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.user
  }
  return state
}

export default reducer
