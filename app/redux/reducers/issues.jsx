import Immutable from 'immutable'
import axios from 'axios'

/* --------------- INITIAL STATE --------------- */

const initialState = Immutable.List([])

/* --------------- ACTIONS --------------- */

const GET_OPEN_ISSUES = 'GET_OPEN_ISSUES'
const GET_ADVOCATE_ISSUES = 'GET_ADVOCATE_ISSUES'
const GET_ALL_ISSUES = 'GET_ISSUES'
const CLEAR_ISSUES = 'CLEAR_ISSUES'

/* --------------- ACTION CREATORS --------------- */

export const getIssues = issues => ({
  type: GET_ALL_ISSUES,
  issues
})

export const getOpenIssues = issues => ({
  type: GET_OPEN_ISSUES,
  issues
})

export const getAdvocateIssues = issues => ({
  type: GET_ADVOCATE_ISSUES,
  issues
})

export const dropIssues = issues => ({
  type: CLEAR_ISSUES,
  issues
})

/* --------------- ASYNC ACTION CREATORS --------------- */

export function receiveIssues () {
  return function (dispatch) {
    axios.get('/api/issues')
      .then(res => {
        const issues = Immutable.fromJS(res.data)
        dispatch(getIssues(issues))
      })
      .catch(err => alert(err)) // eslint-disable-line no-undef
  }
}

export function receiveOpenIssues (id) {
  return function (dispatch) {
    axios.get(`/api/issues/available/${id}`)
      .then(res => {
        const issues = Immutable.fromJS(res.data)
        dispatch(getOpenIssues(issues))
      })
      .catch(err => alert(err)) // eslint-disable-line no-undef
  }
}

export function receiveAdvocateIssues () {
  return function (dispatch) {
    axios.get('/api/issues/assignedToMe')
      .then(res => {
        const issues = Immutable.fromJS(res.data)
        dispatch(getAdvocateIssues(issues))
      })
      .catch(err => alert(err)) // eslint-disable-line no-undef
  }
}

export function signup (username, contact_method, email, phone, time, timezone, voicemail, text, skype, other) {
  return function (dispatch) {
    axios.post('/api/issues', { username, contact_method, email, phone, time, timezone, voicemail, text, skype, other })
      .then(res => {
        const issues = Immutable.fromJS(res.data)
        dispatch(dropIssues(issues))
      })
      .catch(err => alert(err)) // eslint-disable-line no-undef
  }
}

/* --------------- REDUCER --------------- */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ISSUES:
      return action.issues
    case GET_OPEN_ISSUES:
      return action.issues
    case GET_ADVOCATE_ISSUES:
      return action.issues
    case CLEAR_ISSUES:
      return Immutable.List([])
    default:
      return state
  }
}

export default reducer
