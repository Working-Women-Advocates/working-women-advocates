/* global componentHandler */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Signup from './Signup'
import { signup } from '../../redux/reducers/issues'
import { browserHistory } from 'react-router'

function mapDispatchToProps (dispatch) {
  return {
    signup: (username, contact_method, email, phone, time, timezone, voicemail, text, skype, other) => {
      dispatch(signup(username, contact_method, email, phone, time, timezone, voicemail, text, skype, other))
      browserHistory.push('/signup-submitted')
    }
  }
}

export default connect(null, mapDispatchToProps)(class extends Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedOption: 'Email'
    }
    this.handleChange = this.handleChange.bind(this)
    this.voicemailChange = this.voicemailChange.bind(this)
  }

  handleChange (evt) {
    componentHandler.upgradeDom()
    this.setState({
      selectedOption: evt.target.value
    })
  }

  voicemailChange (evt) {
    this.setState({
      voicemail: evt.target.value
    })
  }

  render () {
    return (
      <Signup
        {...this.state}
        {...this.props}
        handleChange={this.handleChange}
      />
    )
  }
})
