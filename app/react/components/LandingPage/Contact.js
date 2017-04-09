import React from 'react'

import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div id="tf-contact" className="text-center">
      <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="section-title center">
              <h2>Looking forward to <br /><strong>connecting with you</strong></h2>
              <div className="line">
                <hr />
              </div>
              <div className="clearfix"></div>
              <p className="intro">Email us at <span style={{ 'fontWeight': '700', 'color': '#FCAC45' }}>info@workingwomenadvocates.org</span></p>
              <p className="intro">Connect with us on <a href="https://twitter.com/WWAdvocates" target="blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i> Twitter</a> and <a href="https://www.facebook.com/WWAdvocates" target="blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i> Facebook</a>.</p>
              <ContactForm />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact
