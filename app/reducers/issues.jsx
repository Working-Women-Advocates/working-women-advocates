import axios from 'axios'

const GET_OPEN_ISSUES = 'GET_OPEN_ISSUES'
const GET_ADVOCATE_ISSUES = 'GET_ADVOCATE_ISSUES'
const GET_ALL_ISSUES = 'GET_ISSUES'
const CLEAR_ISSUES = 'CLEAR_ISSUES'

const reducer = (state =[], action) => {

  let newState = Object.assign({}, state);

  switch (action.type) {
    case GET_ALL_ISSUES:
      newState = action.issues;
      break;
    case GET_OPEN_ISSUES:
      newState = action.issues;
      break;
    case GET_ADVOCATE_ISSUES:
      newState = action.issues;
      break;
    case CLEAR_ISSUES:
      newState = [];
      break;
    default:
      return state;
  }
  return newState
};

export const getIssues = issues => ({
    type: GET_ALL_ISSUES,
    issues
});

export const getOpenIssues = issues => ({
    type: GET_OPEN_ISSUES,
    issues
});

export const getAdvocateIssues = issues => ({
    type: GET_ADVOCATE_ISSUES,
    issues
});

export const dropIssues = issues => ({
    type: CLEAR_ISSUES,
    issues
});

export function receiveIssues() {
  return function (dispatch) {
    axios.get('/api/issues')
      .then((res) => dispatch(getIssues(res.data)))
      .catch((err) => alert(err))
  }
}

export function receiveOpenIssues(id) {
  return function (dispatch) {
    axios.get(`/api/issues/available/${id}`)
      .then((res) => dispatch(getOpenIssues(res.data)))
      .catch((err) => alert(err))
  }
}

export function receiveAdvocateIssues(id) {
  return function (dispatch) {
    axios.get(`/api/issues/assignedToMe/${id}`)
      .then((res) => dispatch(getAdvocateIssues(res.data)))
      .catch((err) => alert(err))
  }
}

export function clearIssues() {
  return function (dispatch) {
    axios.get('/api/issues')
      .then((res) => dispatch(dropIssues(res.data)))
      .catch((err) => alert(err))
  }
}

export default reducer
