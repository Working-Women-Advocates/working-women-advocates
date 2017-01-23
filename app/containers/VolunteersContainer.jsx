import React from 'react';
import {connect} from 'react-redux';
import Volunteers from '../components/Volunteers';
import {browserHistory} from 'react-router';

function mapStateToProps(state) {
  return {
    volunteers: state.volunteers
  }
}

export default connect(mapStateToProps)(Volunteers)
