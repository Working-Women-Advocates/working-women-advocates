import React from 'react'

const NavBar = () => {
  return (
    <nav id="tf-menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html">
            <img className="" src="img/TEMP-logo.png" />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#tf-home" className="page-scroll">Home</a></li>
            <li><a href="#tf-about" className="page-scroll">About</a></li>
            <li><a href="#tf-team" className="page-scroll">Team</a></li>
            <li><a href="#tf-services" className="page-scroll">Advocacy</a></li>
            <li><a href="#tf-testimonials" className="page-scroll">Get Involved</a></li>
            <li><a href="#tf-contact" className="page-scroll">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
