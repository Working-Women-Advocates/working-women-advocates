import Immutable from 'immutable'
import axios from 'axios'

/* --------------- INITIAL STATE --------------- */

const initialState = Immutable.List([])

/* --------------- ACTIONS --------------- */

const GET_ALL_VOLUNTEERS = 'GET_ALL_VOLUNTEERS'
const CLEAR_VOLUNTEERS = 'CLEAR_VOLUNTEERS'

/* --------------- ACTION CREATORS --------------- */

export const getAllVolunteers = volunteers => ({
  type: GET_ALL_VOLUNTEERS,
  volunteers
})

export const dropVolunteers = volunteers => ({
  type: CLEAR_VOLUNTEERS,
  volunteers
})

/* --------------- ASYNC ACTION CREATORS --------------- */

export function receiveVolunteers () {
  return function (dispatch) {
    axios.get('/api/volunteers')
      .then(res => {
        const volunteers = Immutable.fromJS(res.data)
        dispatch(getAllVolunteers(volunteers))
      })
      .catch(err => alert(err)) // eslint-disable-line no-undef
  }
}

/* --------------- REDUCER --------------- */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VOLUNTEERS:
      return action.volunteers
    case CLEAR_VOLUNTEERS:
      return Immutable.List([])
    default:
      return state
  }
}

export default reducer
