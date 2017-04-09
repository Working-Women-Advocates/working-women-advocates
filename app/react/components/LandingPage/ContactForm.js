import React, { Component } from 'react'
import axios from 'axios'

import FeedbackForm from './FeedbackForm'
import VolunteerForm from './VolunteerForm'

class ContactForm extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      messageBody: "What's your message?",
      messageType: 'feedback'
    }

    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFormChange (evt) {
    const newState = Object.assign({}, this.state)
    switch (evt.target.name) {
      case 'name': newState.name = evt.target.value; break
      case 'email': newState.email = evt.target.value; break
      case 'message-body': newState.messageBody = evt.target.value; break
    }
    this.setState(newState)
  }

  handleTypeChange (evt) {
    this.setState(Object.assign({}, this.state, {
      messageType: evt.target.value,
      messageBody: evt.target.value === 'get-involved'
        ? 'Volunteer Advocate'
        : "What's your message?"
    }))
  }

  handleSubmit (evt) {
    evt.preventDefault()
    console.log('submitted!', evt.target.name.value)
    if (this.state.messageType === 'get-involved') {
      axios.post('/api/volunteers', {
        username: this.state.name,
        email: this.state.email,
        interest: this.state.messageBody
      })
    }
    if (this.state.messageType === 'feedback') {
      axios.post('/api/feedback', {
        username: this.state.name,
        email: this.state.email,
        message: this.state.messageBody
      })
    }
  }

  render () {
    return (
      <div id="contact-form">
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>

              <tr>
                <td className="form-label"><h4>What's up?!</h4></td>
                <td>
                  <select name="message-type" value={this.state.messageType} onChange={this.handleTypeChange}>
                    <option value="feedback">I'd like to leave feedback</option>
                    <option value="get-involved">I'd like to get involved with WWA!</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td className="form-label">What's your name?</td>
                <td>
                  <input
                    className="text-field"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleFormChange}/>
                </td>
              </tr>

              <tr>
                <td className="form-label">What's your email?</td>
                <td>
                  <input
                    className="text-field"
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              {
                this.state.messageType === 'get-involved'
                ? <VolunteerForm
                    messageBody={this.state.messageBody}
                    handleFormChange={this.handleFormChange}
                  />
                : <FeedbackForm
                  messageBody={this.state.messageBody}
                  handleFormChange={this.handleFormChange}
                />
              }
              <tr>
                <td className="form-label">How'd you hear about us?</td>
                <td>
                  <select name="referrer">
                    <option value="twitter">Twitter</option>
                    <option value="facebook">Facebook</option>
                    <option value="medium">Medium</option>
                    <option value="friend">Friend</option>
                    <option value="search-engine">Search engine</option>
                    <option value="other">Other</option>
                  </select><br />
                </td>
              </tr>

            </tbody>
          </table>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    )
  }
}

export default ContactForm
