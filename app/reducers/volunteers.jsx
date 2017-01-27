import axios from 'axios'

const GET_ALL_VOLUNTEERS = 'GET_ALL_VOLUNTEERS'
const CLEAR_VOLUNTEERS = 'CLEAR_VOLUNTEERS'

const reducer = (state =[], action) => {

  let newState = Object.assign({}, state);

  switch (action.type) {
    case GET_ALL_VOLUNTEERS:
      newState = action.volunteers;
      break;
    case CLEAR_VOLUNTEERS:
      newState = [];
      break;
    default:
      return state;
  }
  return newState
};

export const getAllVolunteers = volunteers => ({
    type: GET_ALL_VOLUNTEERS,
    volunteers
});

export const dropVolunteers = volunteers => ({
    type: CLEAR_VOLUNTEERS,
    volunteers
});

export function receiveVolunteers() {
  return function (dispatch) {
    axios.get('/api/volunteers')
      .then((res) => dispatch(getAllVolunteers(res.data)))
      .catch((err) => alert(err))
  }
}

export default reducer
