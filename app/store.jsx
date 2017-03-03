import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { whoami } from './reducers/auth'

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
