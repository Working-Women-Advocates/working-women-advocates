import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  issues: require('./issues').default,
  volunteers: require('./volunteers').default
})

export default rootReducer
