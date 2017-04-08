import React, { Component } from 'react'

class ContactForm extends Component {
  constructor () {
    super()
    this.state = { }
  }

  // handleFormChange (e) => {
  //
  // }

  render () {
    return (
      <form className="contact-form">
        <table style={{'margin-left':'auto', 'margin-right':'auto'}}>
        <h3>Get at me bro</h3>
          <tr>
            <td style={{'text-align':'left'}}>What's up?!</td>
            <td style={{'text-align':'right'}}>
              <select name="message-type">
                <option value="get-involved">I'd like to get involved with WWA!</option>
                <option value="sponsor">I'd like to sponsor WWA</option>
                <option value="feedback">I'd like to leave feedback</option>
                <option value="something-else">I'd like to talk about something else</option>
              </select><br />
            </td>
          </tr>
          <tr>
            <td style={{'text-align':'left'}}>How'd you hear about us?</td>
            <td style={{'text-align':'right'}}>
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
          <tr>
          <input type="text" name="firstname" value="Mickey" /><br/>
        </tr>
        </table>
      </form>
    )
  }
}

export default ContactForm
