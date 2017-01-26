import React, { Component } from 'react';

export default class Signup extends Component {

  componentDidMount() {
    // To handle material design styling on inputs
    componentHandler.upgradeDom()
  }

  render() {
    return (
      <main className="mdl-layout__content">
        <div className="page-content mdl-cell mdl-cell--6-col">
          <h1>Working Women Signup</h1>
          <div className="card-wide mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title mdl-card--expand">
              <h2 className="mdl-card__title-text">Read everything!</h2>
            </div>
            <div className="mdl-card__supporting-text">
              <p>Before filling out this form, please confirm you are not on your company WiFi. Some companies track employee activity on the Internet.</p>
              <p>An advocate will contact you by your preferred method of contact upon submission of this form.</p>
              <form action="#" onSubmit={evt => {
                evt.preventDefault()
                this.props.signup({
                       name: evt.target.name.value,
                       contact_method: this.props.selectedOption,
                       email: evt.target.email && evt.target.email.value,
                       phone: evt.target.phone && evt.target.phone.value,
                       text: evt.target.text && evt.target.text.value,
                       skype: evt.target.skype && evt.target.skype.value,
                       other: evt.target.other && evt.target.other.value
                       })
              } }>
                <div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="name" />
                  <label className="mdl-textfield__label" htmlFor="name">Username</label>
                </div>
                <p className="input-tag">We will refer to you by this.</p>

                <h6>What is your preferred method of contact?</h6>
                <select
                  className="soflow"
                  name="selectedOption"
                  required
                  onChange={this.props.handleChange}>
                  {
                    ['Email', 'Phone', 'SMS Text', 'Skype', 'Other'].map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))
                  }
                </select>
                {/* do they need to be assigned a fake email account? */}
                {this.props.selectedOption === 'Email' ?
                  <div>
                    <div className="mdl-textfield mdl-js-textfield">
                      <input className="mdl-textfield__input" type="text" id="email" />
                      <label className="mdl-textfield__label" htmlFor="email">Email</label>
                    </div>
                    <p className="input-tag">Need an anonymous email account?</p>
                    <p className="input-tag"><a href="https://signup.live.com/?wa=wsignin"  target="_blank" rel="noopener noreferrer">Make one here.</a></p>
                  </div> : ''}
                {/* text or call? if call: best time? need to set appointment? */}
                {this.props.selectedOption === 'Phone' ? <div><div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="phone" />
                  <label className="mdl-textfield__label" htmlFor="phone">Phone</label>
                </div><div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="time" />
                  <label className="mdl-textfield__label" htmlFor="time">Best Time To Reach You</label>
                </div><p className="input-tag">Day(s) of week. What time?</p><div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="timezone" />
                  <label className="mdl-textfield__label" htmlFor="timezone">Your Time Zone</label>
                </div><div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="voicemail" />
                  <label className="mdl-textfield__label" htmlFor="voicemail">Okay to leave voicemail?</label>
                </div></div> : ''}
                {this.props.selectedOption === 'SMS Text' ? <div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="text" />
                  <label className="mdl-textfield__label" htmlFor="text">Phone Number</label>
                </div> : ''}
                {this.props.selectedOption === 'Skype' ? <div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="skype" />
                  <label className="mdl-textfield__label" htmlFor="skype">Skype Username</label>
                </div> : ''}
                {this.props.selectedOption === 'Other' ? <div><div className="mdl-textfield mdl-js-textfield">
                  <input className="mdl-textfield__input" type="text" id="other" />
                  <label className="mdl-textfield__label" htmlFor="other">Other</label>
                </div>
                <p className="input-tag">WhatsApp? SnapChat? Google Hangouts? You tell us.</p>
                <p className="input-tag">Required: the service & your username.</p></div> : ''}
                <div className="get-started">
                  <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

