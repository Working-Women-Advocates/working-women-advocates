import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  issues: require('./issues').default,
  volunteers: require('./volunteers').default,
  advocates: require('./advocates').default,
  loginError: require('./loginError').default
})

export default rootReducer
