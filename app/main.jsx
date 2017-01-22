'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import AppContainer from './containers/AppContainer'
import Landing from './components/Landing'
import Hotline from './components/Hotline'
import About from './components/About'
import Volunteer from './components/Volunteer'
import AdvocateLoginContainer from './containers/AdvocateLoginContainer'
import WorkingWomenSignup from './components/WorkingWomenSignup'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'

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
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="/landing" />
        <Route path="/landing" component={Landing} />
        <Route path="/hotline" component={Hotline} />
        <Route path="/about" component={About} />
        <Route path="/volunteer" component={Volunteer} />
        <Route path="/advocate-login" component={AdvocateLoginContainer} />
        <Route path="/working-women-signup" component={WorkingWomenSignup} />
        <Route path="/dashboard" component={Dashboard} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
