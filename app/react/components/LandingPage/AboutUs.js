import React from 'react'

const AboutUs = () => {
  return (
    <div id="tf-about">
      <div className="container">
        <div className="about-text">
          <div className="section-title center">
            <h2>About <strong>us</strong></h2>

            <div className="line">
              <hr />
            </div>
            <div className="clearfix"></div>

            <p className="intro warning">Currently in development and looking for folks to <strong><a href="#tf-testimonials" className="page-scroll">get involved!</a></strong></p>
            <p className="intro warning">Projected Launch Date: October 1, 2017</p>

            <p className="intro">Women (which we define as people who identify as women) can experience a variety of difficulties at work including, and not limited to:</p>

            <ul className="about-list">
              <li>
                <span className="fa fa-dot-circle-o"></span>
                <strong>Harassment</strong>
              </li>
              <li>
                <span className="fa fa-dot-circle-o"></span>
                <strong>Sexism</strong>
              </li>
              <li>
                <span className="fa fa-dot-circle-o"></span>
                <strong>Exclusion</strong>
              </li>
              <li>
                <span className="fa fa-dot-circle-o"></span>
                <strong>Discrimination</strong>
              </li>
              <li>
                <span className="fa fa-dot-circle-o"></span>
                <strong>Assault</strong>
              </li>
            </ul>

            <p className="intro">Advocates are trained to connect women with the resources they need to navigate through their challenges. Each woman who connects with us will be offered the option to enroll in our Allies Program as well.</p>

            <p className="intro">Privacy and security are of utmost importance to Working Women Advocates. We know these are sensitive matters and we want women to feel safe when they are working with us. All advocacy will be offered free of charge.</p>

            <p className="intro">Here's Working Women Advocates Founder & CEO, Rachel Bird, explaining who we are and what we do.</p>

            <div className="embed-responsive embed-responsive-16by9"><iframe className="embed-responsive-item" src="https://www.youtube.com/embed/dvJ20ECzxMU" frameBorder="0" allowFullScreen></iframe></div>

            <p className="intro"><a href="https://workingwomenadvocates.org/wwa-info-sheet.pdf" target="blank" rel="noopener noreferrer">Download our information sheet to learn more.</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
