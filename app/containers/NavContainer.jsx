import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav';

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Nav);