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
      volunteerInterest: '',
      messageBody: "What's your message?",
      messageType: 'feedback',
      referrer: '',
      dirty: false,
      resolved: false
    }

    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearMessageBody = this.clearMessageBody.bind(this)
  }

  handleFormChange (evt) {
    const newState = Object.assign({}, this.state)
    switch (evt.target.name) {
      case 'name': newState.name = evt.target.value; break
      case 'email': newState.email = evt.target.value; break
      case 'volunteer-interest': newState.volunteerInterest = evt.target.value; break
      case 'message-body': newState.messageBody = evt.target.value; break
    }
    this.setState(newState)
  }

  handleTypeChange (evt) {
    this.setState(Object.assign({}, this.state, {
      messageType: evt.target.value,
      volunteerInterest: 'Volunteer Advocate'
    }))
  }

  //  Send feedback to relevent database
  handleSubmit (evt) {
    evt.preventDefault()
    if (this.state.messageType === 'get-involved') {
      axios.post('/api/volunteers', {
        username: this.state.name,
        email: this.state.email,
        interest: this.state.messageBody,
        referrer: evt.target.referrer.value
      })
      .then(this.setState(Object.assign({}, this.state, { resolved: true })))
      .catch(err => console.error(err))
    }
    if (this.state.messageType === 'feedback') {
      axios.post('/api/feedback', {
        name: this.state.name,
        email: this.state.email,
        message: this.state.messageBody,
        referrer: evt.target.referrer.value
      })
      .then(this.setState(Object.assign({}, this.state, { resolved: true })))
      .catch(err => console.error(err))
    }
  }

  clearMessageBody (evt) {
    const newState = Object.assign({}, this.state)
    if (evt.target.name === 'message-body' && !this.state.dirty) newState.messageBody = ''
    newState.dirty = true
    this.setState(newState)
  }

  render () {
    if (this.state.resolved){
      return (
        <div id="contact-form">
          <h3>Thank you!</h3>
        </div>
      )
    } else {
      return (
        <div id="contact-form">
          <form onSubmit={this.handleSubmit}>
            <table>
              <tbody>


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

                <tr>
                  <td className="form-label"><h4>Subject:</h4></td>
                    <td>
                      <select name="message-type"
                        value={this.state.messageType}
                        onChange={this.handleTypeChange}
                      >
                        <option value="feedback">I'd like to leave feedback</option>
                        <option value="get-involved">I'd like to get involved with WWA!</option>
                      </select>
                    </td>
                </tr>

                {
                  this.state.messageType === 'get-involved' &&
                    <VolunteerForm
                      volunteerInterest={this.state.volunteerInterest}
                      handleFormChange={this.handleFormChange}
                    />
                }

                <FeedbackForm
                  messageBody={this.state.messageBody}
                  handleFormChange={this.handleFormChange}
                  clearMessageBody={this.clearMessageBody}
                />

                <tr>
                  <td className="form-label">How'd you hear about us?</td>
                  <td>
                    <select
                      name="referrer">
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
}

export default ContactForm
