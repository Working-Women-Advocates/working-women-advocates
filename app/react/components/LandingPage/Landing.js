/* global alert */
import React from 'react'

const Landing = () => {
  return (
    <div id="tf-home" className="text-center">
      <div className="overlay">
        <div className="content">
          <h1>Working Women <strong><span style={{ 'color': '#4CAF50', 'fontSize': '1em' }}>Advocates</span></strong></h1>
          <p className="lead">Providing support so women can thrive</p>
          <a href="https://www.gofundme.com/working-women-advocates" className="btn donate call-to-action-donate" target="blank" rel="noopener noreferrer">GoFundMe campaign</a>
        </div>
      </div>
    </div>
  )
}

export default Landing
