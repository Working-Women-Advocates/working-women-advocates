
export const setLoginError = errorState => ({
  type: SET_ERROR,
  errorState
})

const SET_ERROR = 'SET_ERROR'
const reducer = (state = false, action) => {
  switch (action.type) {
    case SET_ERROR:
      const newState = action.errorState
      return newState
    default:
      return state
  }
}

export default reducer
