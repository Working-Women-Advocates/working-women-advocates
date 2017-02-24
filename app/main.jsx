'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { receiveIssues, receiveAdvocateIssues, receiveOpenIssues } from './reducers/issues'
import { receiveVolunteers } from './reducers/volunteers'
import { receiveAdvocates } from './reducers/advocates'

import store from './store'
import App from './components/App'
import Landing from './components/Landing'
import Hotline from './components/Hotline'
import About from './components/About'
import VolunteerSignup from './components/VolunteerSignup'
import AdvocateLogin from './components/AdvocateLogin'
import SignupContainer from './components/SignupContainer'
import SignupSubmitted from './components/SignupSubmitted'
import AdminDashboard from './components/AdminDashboard'
import AdvocateDashboard from './components/AdvocateDashboard'
import AvailableDashboard from './components/AvailableDashboard'
import Advocates from './components/Advocates'
import Volunteers from './components/Volunteers'

const allCasesForAdmin = function () {
  store.dispatch(receiveIssues())
}

const advocateCases = function () {
  store.dispatch(receiveAdvocateIssues())
}

const availableCases = function () {
  store.dispatch(receiveOpenIssues())
}

const allVolunteers = function () {
  store.dispatch(receiveVolunteers())
}

const allAdvocates = function () {
  store.dispatch(receiveAdvocates())
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/landing" />
        <Route path="/landing" component={Landing} />
        <Route path="/hotline" component={Hotline} />
        <Route path="/about" component={About} />
        <Route path="/volunteer-signup" component={VolunteerSignup} />
        <Route path="/advocate-login" component={AdvocateLogin} />
        <Route path="/working-women-signup" component={SignupContainer} />
        <Route path="/signup-submitted" component={SignupSubmitted} />
        <Route path="/admin-dashboard" component={AdminDashboard} onEnter={allCasesForAdmin} />
        <Route path="/advocate-dashboard" component={AdvocateDashboard} onEnter={advocateCases} />
        <Route path="/available-dashboard" component={AvailableDashboard} onEnter={availableCases} />
        <Route path="/volunteers" component={Volunteers} onEnter={allVolunteers} />
        <Route path="/advocates" component={Advocates} onEnter={allAdvocates} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
