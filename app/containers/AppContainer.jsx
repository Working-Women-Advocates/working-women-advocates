import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(App);
