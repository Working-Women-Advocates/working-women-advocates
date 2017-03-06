import { createStore, applyMiddleware, combineReducers } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { whoami } from './reducers/auth'

const rootReducer = combineReducers({
  currentUser: require('./reducers/auth').default,
  issues: require('./reducers/issues').default,
  volunteers: require('./reducers/volunteers').default,
  advocates: require('./reducers/advocates').default
})

// Logger must be last in the chain, otherwise it will log thunks and promises, not
// actual actions
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true })))

export default store

// Set the auth info at start
store.dispatch(whoami())
