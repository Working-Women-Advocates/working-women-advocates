/* global alert */

import React from 'react'

export default () => {
  return (
    <main>
      <div>
        { /* Navigation */ }
        <nav id="tf-menu" className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="index.html"><img style={{ 'marginTop': '-5px' }} src="img/wwalogo.png" /></a>
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

        { /* Landing */ }
        <div id="tf-home" className="text-center">
          <div className="overlay">
            <div className="content">
              <h1>Working Women <strong><span style={{ 'color': '#4CAF50', 'fontSize': '1em' }}>Advocates</span></strong></h1>
              <p className="lead">Providing private and secure support so women can thrive</p>
              <a onClick={() => alert('Working Women Advocates does not have nonprofit status yet, so your support will not be tax deductible.')} href="https://www.paypal.me/WWAdvocates" className="btn donate call-to-action-donate" target="blank" rel="noopener noreferrer">Support</a>
              <a href="#tf-testimonials" className="btn second-action page-scroll">Get Involved</a>
            </div>
          </div>
        </div>

        { /* About Us */ }
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

        { /* Team */ }
        <div id="tf-team" className="text-center">
          <div className="overlay">
            <div className="container">
              <div className="section-title center">
                <h2>Meet <strong>our team</strong></h2>
                <div className="line">
                  <hr />
                </div>
                <div className="clearfix"></div>
                <p style={{ 'marginBottom': '20px' }}>
                  <em>We are a remote team of volunteers who are passionate about equality, social justice, and women's rights.</em>
                </p>
              </div>

              <div id="team" className="owl-carousel owl-theme row">
                <div className="item">
                  <div className="thumbnail">
                    <img src="img/team/rachel.jpg" alt="Rachel Bird" className="img-circle team-img" />
                    <div className="caption">
                      <h3>Rachel Bird</h3>
                      <p>CEO / Founder</p>
                      <p>Software developer. Writer. Love warrior.</p> <p>Follow <a href="https://twitter.com/CodingLady" target="blank" rel="noopener noreferrer">@CodingLady</a></p>
                      <p>rachel@workingwomenadvocates.org</p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="thumbnail">
                    <img src="img/team/beth.jpg" alt="Beth Qiang" className="img-circle team-img" />
                    <div className="caption">
                      <h3>Beth Qiang</h3>
                      <p>CTO</p>
                      <p>Queen of all things JavaScript.</p>
                      <p>Follow <a href="https://twitter.com/BethQiang" target="blank" rel="noopener noreferrer">@BethQiang</a></p>
                      <p>beth@workingwomenadvocates.org</p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="thumbnail">
                    <img src="img/team/diana.jpg" alt="Diana Arteaga" className="img-circle team-img" />
                    <div className="caption">
                      <h3>Diana Arteaga</h3>
                      <p>Outreach coordinator</p>
                      <p>Travel enthusiast & networking champion.</p>
                      <p>Follow <a href="https://twitter.com/_dianart" target="blank" rel="noopener noreferrer">@_dianart</a></p>
                      <p>diana@workingwomenadvocates.org</p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="thumbnail">
                    <img src="img/team/dennis.jpg" alt="Dennis Sanchez" className="img-circle team-img" />
                    <div className="caption">
                      <h3>Dennis Sanchez</h3>
                      <p>Compliance, Privacy & Information Security Officer</p>
                      <p>Tennis genius. Moonlights as a chef, vet, and musician.</p>
                      <p>Follow <a href="https://twitter.com/dennycanta" target="blank" rel="noopener noreferrer">@dennycanta</a></p>
                      <p>dennis@workingwomenadvocates.org</p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="thumbnail">
                    <img src="img/team/mark.png" alt="Mark Hario" className="img-circle team-img" />
                    <div className="caption">
                      <h3>Mark Hario</h3>
                      <p>Software Engineer</p>
                      <p>Former welder and robotics guy.</p>
                      <p>Follow <a href="https://twitter.com/MarkHario" target="blank" rel="noopener noreferrer">@MarkHario</a></p>
                      <p>mark@workingwomenadvocates.org</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        { /* Services */ }
        <div id="tf-services" className="text-center">
          <div className="container">
            <div className="section-title center">
              <h2>Types of <strong>advocacy</strong></h2>
              <div className="line">
                <hr />
              </div>
              <div className="clearfix"></div>
              <p style={{ 'marginBottom': '20px' }}><em>Women will be interviewed and then paired with the types of advocacy that are most beneficial to them.</em></p>
              <div className="service">
                <i className="fa fa-heart"></i>
                <h4><strong>Each woman will be connected with an ally.</strong></h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-6 service">
                <i className="fa fa-user"></i>
                <h4><strong>Therapy</strong></h4>
              </div>

              <div className="col-md-3 col-sm-6 service">
                <i className="fa fa-gavel"></i>
                <h4><strong>Legal Advice </strong></h4>
              </div>

              <div className="col-md-3 col-sm-6 service">
                <i className="fa fa-money"></i>
                <h4><strong>Financial Advice</strong></h4>
              </div>

              <div className="col-md-3 col-sm-6 service">
                <i className="fa fa-desktop"></i>
                <h4><strong>Job Coaching</strong></h4>
              </div>
            </div>
          </div>
        </div>

        { /* Get Involved */ }
        <div id="tf-testimonials" className="text-center">
          <div className="overlay">
            <div className="container">
              <div className="section-title center">
                <h2><strong>Get </strong>Involved</h2>
                <div className="line">
                  <hr />
                </div>
              </div>
              <p className="intro">What can you do? There's something for everyone!</p>

              <ul className="about-list">
                <li>
                  <span className="fa fa-dot-circle-o"></span>
                  <span className="involved-title">Therapists, Lawyers, Financial Advisors, Job Coaches</span>volunteer as advocates
                </li>
                <li>
                  <span className="fa fa-dot-circle-o"></span>
                  <span className="involved-title">Allies</span>volunteer to be an ally
                </li>
                <li>
                  <span className="fa fa-dot-circle-o"></span>
                  <span className="involved-title">Social Changers</span>help us develop our programs
                </li>
                <li>
                  <span className="fa fa-dot-circle-o"></span>
                  <span className="involved-title">Accountants & Bookkeepers</span>help us manage our money
                </li>
                <li>
                  <span className="fa fa-dot-circle-o"></span>
                  <span className="involved-title">Writers</span>write for our blog and edit our documents
                </li>
                <li>
                  <span className="fa fa-dot-circle-o"></span>
                  <span className="involved-title">Fundraisers</span>help us get donations
                </li>
                <li>
                  <span className="fa fa-dot-circle-o"></span>
                  <span className="involved-title">Businesses</span>become sponsors
                </li>
                <li>
                  <span className="fa fa-dot-circle-o"></span>
                  <span className="involved-title">Grant Writers</span>write for us
                </li>
                <li>
                  <span className="fa fa-dot-circle-o"></span>
                  <span className="involved-title">Other Interests</span>plenty to do! get in touch
                </li>
              </ul>
              <p className="intro" style={{ 'marginBottom': '45px' }}><a href="#tf-contact" className="page-scroll"><button className="btn orange-button">Contact us</button></a> ASAP so we can get you started on this important work.</p>
              <p className="intro" style={{ 'marginBottom': '45px' }}>
              <a onClick={() => alert('Working Women Advocates does not have nonprofit status yet, so your support will not be tax deductible.')} href="https://www.paypal.me/WWAdvocates" className="btn donate call-to-action-donate" target="blank" rel="noopener noreferrer">Support us with a contribution</a>
              </p>
              <p style={{ 'marginTop': '15px' }}>
                  Working Women Advocates does not have nonprofit status yet,<br /> so your support will not be tax deductible.
              </p>
            </div>
          </div>
        </div>

        { /* Contact */ }
        <div id="tf-contact" className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="section-title center">
                  <h2>Looking forward to <strong>hearing from you</strong></h2>
                  <div className="line">
                    <hr />
                  </div>
                  <div className="clearfix"></div>
                  <p className="intro"><em>Please tell us how you'd like to become involved in our organization.</em></p>
                  <p className="intro">Email us at <span style={{ 'fontWeight': '700', 'color': '#FCAC45' }}>info@workingwomenadvocates.org</span></p>
                  <p className="intro">Connect with us on <a href="https://twitter.com/WWAdvocates" target="blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i> Twitter</a> and <a href="https://www.facebook.com/WWAdvocates" target="blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i> Facebook</a>.</p>
                  <p className="intro">Contact us on <a href="https://rachel606.typeform.com/to/F9Od7T" target="blank" rel="noopener noreferrer"> our form</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </main>
  )
}
