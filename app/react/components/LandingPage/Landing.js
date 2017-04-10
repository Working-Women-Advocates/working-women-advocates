/* global alert */
import React from 'react'

const Landing = () => {
  return (
    <div id="tf-home" className="text-center">
      <div className="overlay">
        <div className="content">
          <h1>Working Women <strong><span style={{ 'color': '#4CAF50', 'fontSize': '1em' }}>Advocates</span></strong></h1>
          <p className="lead">Providing support so women can thrive</p>
          <a onClick={() => alert('Working Women Advocates does not have nonprofit status yet, so your support will not be tax deductible.')} href="https://www.paypal.me/WWAdvocates" className="btn donate call-to-action-donate" target="blank" rel="noopener noreferrer">Support</a>
          <a href="#tf-testimonials" className="btn second-action page-scroll">Get Involved</a>
        </div>
      </div>
    </div>
  )
}

export default Landing
