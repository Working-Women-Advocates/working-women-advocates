import React from 'react'

const {Grid, Row, Col} = require('react-flexgrid');

const AboutUs = () => {
  return (
    <div id="tf-about">
      <Grid>
        <Row>
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
              <Col xs={12} md={5}>
                <li>
                  <span className="fa fa-dot-circle-o"></span>
                  <strong>Case Managers</strong>
                  <p>Through the Working Woman Advocates app, women are paired with a Case Manager who is there to help he navigate through these types of workplace hardships, connect her with Advocates and Allies, and share resources. They also promote the importance of self-care, through things like diet, exercise, yoga, and meditation.</p>
                </li>
              </Col>
              <Col xs={12} md={3}>
                <li>
                  <span className="fa fa-dot-circle-o"></span>
                  <strong>Advocates</strong>
                  <p>Volunteers who provide services including therapy, financial advice, legal advice, HR advice, and life and job coaching.</p>
                </li>
              </Col>
              <Col xs={12} md={4}>
                <li>
                  <span className="fa fa-dot-circle-o"></span>
                  <strong>Allies</strong>
                  <p>The Working Woman Advocates Allies Program connects women with allies in their industry who will provide support and friendship. They aim to create a positive experience for women in the hopes of offsetting the negative experience they just had.</p>
                </li>
              </Col>
            </ul>

            </div>
            </Row>
            <Row>
              <p className="intro">Working Women Advocates are trained to connect women with the resources they need to navigate through their challenges. Resources include therapy, financial and legal advice, job coaching, and pairing up with allies.</p>

              <p className="intro">Privacy and security are of utmost importance to Working Women Advocates. Women will never be asked to provide identifying information when they are working with advocates.</p>

              <p className="intro"><a href="https://youtu.be/gys6ofGkXDA" target="blank" rel="noopener noreferrer">Watch Rachel present the WWA prototype at a Fullstack Academy hackathon.</a></p>
            </Row>

        </Grid>
    </div>
  )
}

export default AboutUs
