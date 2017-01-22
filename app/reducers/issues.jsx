import axios from 'axios'

const GET_ISSUES = 'GET_ISSUES'
const CLEAR_ISSUES = 'CLEAR_ISSUES'

const reducer = (state =[], action) => {

  let newState = Object.assign({}, state);

  switch (action.type) {
    case GET_ISSUES:
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
    type: GET_ISSUES,
    issues
});

export const dropIssues = issues => ({
    type: CLEAR_ISSUES,
    issues
});

export function receiveIssues() {
  // Return a thunk
  return function (dispatch) {
    axios.get('/api/issues')
      .then((res) => dispatch(getIssues(res.data)))
      .catch((err) => alert(err))
  }
}

export function clearIssues() {
  // Return a thunk
  return function (dispatch) {
    axios.get('/api/issues')
      .then((res) => dispatch(dropIssues(res.data)))
      .catch((err) => alert(err))
  }
}

export default reducer
