import React from 'react'

const AboutUs = () => {
  return (
    <div id="tf-about">
      <div className="container">
        <div className="about-text">
          <div className="section-title">
            <h2>About us</h2>
          </div>

          <p className="intro warning">Currently in development and looking for folks to <strong><a href="#tf-testimonials" className="page-scroll">get involved!</a></strong></p>

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

          <p className="intro">Working Women Advocates are trained to connect women with the resources they need to navigate through their challenges. Each woman who connects with us will be offered the option to enroll in our Allies Program as well.</p>

          <p className="intro">Privacy and security are of utmost importance to Working Women Advocates. We know these are sensitive matters and we want women to feel safe when they are working with us. All advocacy will be offered free of charge.</p>

          <p className="intro"><a href="https://youtu.be/gys6ofGkXDA" target="blank" rel="noopener noreferrer">Watch Rachel present the WWA prototype at a Fullstack Academy hackathon.</a></p>

        </div>
      </div>
    </div>
  )
}

export default AboutUs
