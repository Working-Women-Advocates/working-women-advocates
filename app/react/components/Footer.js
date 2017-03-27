import React from 'react'

const Footer = () => {
  return (
    <nav id="footer">
      <div className="container">
        <div className="pull-left fnav">
          <p>ALL RIGHTS RESERVED. COPYRIGHT © 2017.</p>
          <p style={{ 'fontSize': '10px', 'color': '#9E9E9E' }}>Template designed by <a href="https://dribbble.com/shots/1817781--FREEBIE-Spirit8-Digital-agency-one-page-template" target="blank" rel="noopener noreferrer" style={{ 'color': '#9E9E9E' }}>Robert Berki</a> and coded by <a href="https://dribbble.com/jennpereira" target="blank" rel="noopener noreferrer" style={{ 'color': '#9E9E9E' }}>Jenn Pereira</a></p>
        </div>
        <div className="pull-right fnav">
          <ul className="footer-social">
            <li><a href="https://www.facebook.com/WWAdvocates" target="blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/WWAdvocates" target="blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Footer
