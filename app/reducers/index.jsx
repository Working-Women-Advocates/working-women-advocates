import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  issues: require('./issues').default
})

export default rootReducer
