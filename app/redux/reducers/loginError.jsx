const SET_ERROR = 'SET_ERROR'

export const setLoginError = errorState => ({
  type: SET_ERROR,
  errorState  // boolean
})

const reducer = (state = false, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.errorState
    default:
      return state
  }
}

export default reducer
