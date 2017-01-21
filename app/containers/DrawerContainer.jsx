import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from '../components/Drawer';

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Drawer);
