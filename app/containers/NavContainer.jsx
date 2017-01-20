import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
// import { selectUser } from '../reducers/users';
// import { logout } from '../reducers/auth';
// import {browserHistory} from 'react-router';

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Nav);
