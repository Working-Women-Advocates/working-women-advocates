import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from '../components/Drawer';
import { logout } from '../reducers/auth';
import {browserHistory} from 'react-router';

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logout())
      browserHistory.push('/');
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
