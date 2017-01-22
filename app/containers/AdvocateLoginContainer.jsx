import React from 'react';
import {connect} from 'react-redux';
import AdvocateLogin from '../components/AdvocateLogin.jsx';
import {login} from '../reducers/auth';
import {browserHistory} from 'react-router';

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
      browserHistory.push('/dashboard');
    }
  }
}

export default connect(null, mapDispatchToProps)(AdvocateLogin)
