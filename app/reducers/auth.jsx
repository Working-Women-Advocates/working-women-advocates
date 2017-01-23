import axios from 'axios'
import {clearIssues} from './issues'
import {clearVolunteers} from './volunteers'
import {clearAdvocates} from './advocates'

const reducer = (state=null, action) => {
  switch(action.type) {
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
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .then(() => dispatch(clearIssues()))
      .then(() => dispatch(clearVolunteers()))
      .then(() => dispatch(clearAdvocates()))
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
      {username, email, interest})
      .then(() => console.log('volunteer signup complete'))
      .catch((err) => alert(err))

export default reducer
