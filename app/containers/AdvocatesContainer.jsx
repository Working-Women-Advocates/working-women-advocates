import React from 'react';
import {connect} from 'react-redux';
import Advocates from '../components/Advocates';
import {browserHistory} from 'react-router';

function mapStateToProps(state) {
  return {
    advocates: state.advocates
  }
}

export default connect(mapStateToProps)(Advocates)
