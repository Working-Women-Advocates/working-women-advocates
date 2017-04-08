import React from 'react'

import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div id="tf-contact" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="section-title center">
              <h2>Looking forward to <br /><strong>hearing from you</strong></h2>
              <div className="line">
                <hr />
              </div>
              <div className="clearfix"></div>
              <ContactForm />
              <p className="intro"><em>Please tell us how you'd like to become involved in our organization.</em></p>
              <p className="intro">Email us at <span style={{ 'fontWeight': '700', 'color': '#FCAC45' }}>info@workingwomenadvocates.org</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
