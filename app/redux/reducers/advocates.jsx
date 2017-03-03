import Immutable from 'immutable'
import axios from 'axios'

/* --------------- INITIAL STATE --------------- */

const initialState = Immutable.List([])

/* --------------- ACTIONS --------------- */

const GET_ALL_ADVOCATES = 'GET_ALL_ADVOCATES'
const CLEAR_ADVOCATES = 'CLEAR_ADVOCATES'

/* --------------- ACTION CREATORS --------------- */

export const getAllAdvocates = advocates => ({
  type: GET_ALL_ADVOCATES,
  advocates
})

export const dropAdvocates = advocates => ({
  type: CLEAR_ADVOCATES,
  advocates
})

/* --------------- ASYNC ACTION CREATORS --------------- */

export function receiveAdvocates () {
  return function (dispatch) {
    axios.get('/api/users/advocates')
      .then(res => {
        const advocates = Immutable.fromJS(res.data)
        dispatch(getAllAdvocates(advocates))
      })
      .catch(err => alert(err)) // eslint-disable-line no-undef
  }
}

/* --------------- REDUCER --------------- */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ADVOCATES:
      return action.advocates
    case CLEAR_ADVOCATES:
      return Immutable.List([])
    default:
      return state
  }
}

export default reducer
