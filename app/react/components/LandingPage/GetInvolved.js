import React from 'react'

const GetInvolved = () => {
  return (
    <div id="tf-testimonials" className="text-center">
      <div className="container">
        <div className="section-title center">
          <div className="line">
            <hr />
          </div>

          <br />
          <br />
          <h2><strong>Get </strong>Involved</h2>
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
  )
}

export default GetInvolved
