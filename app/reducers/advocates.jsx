import axios from 'axios'

const GET_ALL_ADVOCATES = 'GET_ALL_ADVOCATES'
const CLEAR_ADVOCATES = 'CLEAR_ADVOCATES'

const reducer = (state = [], action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case GET_ALL_ADVOCATES:
      newState = action.advocates
      break
    case CLEAR_ADVOCATES:
      newState = []
      break
    default:
      return state
  }
  return newState
}

export const getAllAdvocates = advocates => ({
  type: GET_ALL_ADVOCATES,
  advocates
})

export const dropAdvocates = advocates => ({
  type: CLEAR_ADVOCATES,
  advocates
})

export function receiveAdvocates () {
  return function (dispatch) {
    axios.get('/api/users/advocates')
      .then((res) => dispatch(getAllAdvocates(res.data)))
      .catch((err) => alert(err))
  }
}

export default reducer
