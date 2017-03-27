import React from 'react'

const Services = () => {
  return (
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
  )
}

export default Services
