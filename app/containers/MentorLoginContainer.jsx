import React from 'react';
import {connect} from 'react-redux';
import MentorLogin from '../components/MentorLogin.jsx';
import {login} from '../reducers/auth';
import {browserHistory} from 'react-router';

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
      browserHistory.push('/');
    }
  }
}

export default connect(null, mapDispatchToProps)(MentorLogin)
