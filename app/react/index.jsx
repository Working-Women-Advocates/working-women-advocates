'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from '../redux/store'
import { receiveIssues, receiveAdvocateIssues, receiveOpenIssues } from '../redux/reducers/issues'
import { receiveVolunteers } from '../redux/reducers/volunteers'
import { receiveAdvocates } from '../redux/reducers/advocates'

import App from './components/App'
import Home from './components/Home'
import AdvocateLogin from './components/AdvocateLogin'
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
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/advocate-login" component={AdvocateLogin} />
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
