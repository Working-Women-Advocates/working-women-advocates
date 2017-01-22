'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import { receiveIssues, receiveAdvocateIssues, receiveOpenIssues } from './reducers/issues';

import store from './store'
import Login from './components/Login'
import AppContainer from './containers/AppContainer'
import Landing from './components/Landing'
import Hotline from './components/Hotline'
import About from './components/About'
import Volunteer from './components/Volunteer'
import AdvocateLoginContainer from './containers/AdvocateLoginContainer'
import SignupContainer from './containers/SignupContainer'
import SignupSubmitted from './components/SignupSubmitted'
import Nav from './components/Nav'
import Footer from './components/Footer'
import AdminContainer from './containers/AdminContainer'
import AdvocateContainer from './containers/AdvocateContainer'
import AvailableContainer from './containers/AvailableContainer'

const allCasesForAdmin = function() {
  store.dispatch(receiveIssues());
}

// need to pass in current user id to get logged in advocate's cases
const advocateCases = function () {
  store.dispatch(receiveAdvocateIssues(2));
};

const availableCases = function () {
  store.dispatch(receiveOpenIssues());
};

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
        <Route path="/working-women-signup" component={SignupContainer} />
        <Route path="/signup-submitted" component={SignupSubmitted} />
        <Route path="/admin-dashboard" component={AdminContainer} onEnter={allCasesForAdmin} />
        <Route path="/advocate-dashboard" component={AdvocateContainer} onEnter={advocateCases} />
        <Route path="/available-dashboard" component={AvailableContainer} onEnter={availableCases} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
