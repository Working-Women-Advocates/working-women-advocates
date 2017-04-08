import React, { Component } from 'react'

class ContactForm extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      messageBody: ''
    }

    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange (evt) {
    console.log(evt.target)
  }

  render () {
    return (
      <div id="contact-form">
        <form>
          <table>
            <tbody>

              <tr>
                <td className="form-label"><h4>What's up?!</h4></td>
                <td>
                  <select name="message-type">
                    <option value="get-involved">I'd like to get involved with WWA!</option>
                    <option value="sponsor">I'd like to sponsor WWA</option>
                    <option value="feedback">I'd like to leave feedback</option>
                    <option value="something-else">I'd like to talk about something else</option>
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
                  />
                </td>
              </tr>

              <tr>
                <td
                  >What's your message??</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <textarea
                    className="form-label"
                    name="message-body"
                    value={this.state.messageBody}
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>

              <tr>
                <td className="form-label">How'd you hear about us?</td>
                <td>
                  <select name="referee">
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
