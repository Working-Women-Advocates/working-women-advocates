import axios from 'axios'

const GET_ISSUES = 'GET_ISSUES'
const reducer = (state =[], action) => {

  let newState = Object.assign({}, state);

  switch (action.type) {
    case GET_ISSUES:
      newState = action.issues;
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

export function receiveIssues() {
  // Return a thunk
  return function (dispatch) {
    axios.get('/api/issues')
      .then((res) => dispatch(getIssues(res.data)))
      .catch((err) => alert(err))
  }
}

export default reducer
