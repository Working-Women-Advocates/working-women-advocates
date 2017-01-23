import React, { Component } from 'react';
import {connect} from 'react-redux';
import Signup from '../components/Signup';
import {signup} from '../reducers/issues';
import {browserHistory} from 'react-router';

function mapDispatchToProps(dispatch) {
  return {
    signup: (username, contact_method, email, phone, text, skype, other) => {
      dispatch(signup(username, contact_method, email, phone, text, skype, other));
      browserHistory.push('/signup-submitted');
    }
  }
}

export default connect(null, mapDispatchToProps)(class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'Email'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt) {
    this.setState({
      selectedOption: evt.target.value
    });
  }

  render () {
    return (
      <Signup
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
      />
    );
  }
});
