import React, { Component } from 'react';

export default () => {
  return (
  <div className="snippet-demo-container demo-radio demo-radio__radio-on">
    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="flash1">
      <input defaultChecked className="mdl-radio__button" id="flash1" name="flash" type="radio" defaultValue="on" />
      <span className="mdl-radio__label">Email</span>
    </label>
    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="flash2">
      <input className="mdl-radio__button" id="flash2" name="flash" type="radio" defaultValue="off" />
      <span className="mdl-radio__label">Phone</span>
    </label>
    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="flash3">
      <input className="mdl-radio__button" id="flash3" name="flash" type="radio" defaultValue="auto" />
      <span className="mdl-radio__label">Skype</span>
    </label>
    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="flash3">
      <input className="mdl-radio__button" id="flash3" name="flash" type="radio" defaultValue="auto" />
      <span className="mdl-radio__label">Other</span>
    </label>
  </div>
  )
}
