import React from 'react'

const AboutUs = () => {
  return (
    <div id="tf-about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="about-text">
              <div className="section-title">
                <h4>About us</h4>
                <h2>What we can do <strong>for you</strong></h2>
                <hr />
                <div className="clearfix"></div>
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

              <p className="intro">Working Women Advocates are trained to connect women with the resources they need to navigate through their challenges. Resources include therapy, financial and legal advice, job coaching, and pairing up with allies.</p>

              <p className="intro">Privacy and security are of utmost importance to Working Women Advocates. Women will never be asked to provide identifying information when they are working with advocates.</p>

              <p className="intro"><a href="https://youtu.be/gys6ofGkXDA" target="blank" rel="noopener noreferrer">Watch Rachel present the WWA prototype at a Fullstack Academy hackathon.</a></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
