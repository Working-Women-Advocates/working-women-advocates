'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import App from './components/App'
import Landing from './components/Landing'
import Nav from './components/Nav'
import Footer from './components/Footer'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/landing" />
        <Route path="/landing" component={Landing} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
