import React from 'react'
import GetInvolved from './GetInvolved'

const Team = () => {
  return (
    <div id="tf-team" className="text-center">
      <div className="overlay">
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

          <div className="row">

            <div className="item">
              <div className="thumbnail col-md-4">
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
              <div className="thumbnail col-md-4">
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
              <div className="thumbnail col-md-4">
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
              <div className="thumbnail col-md-4">
                <img src="img/team/dennis.jpg" alt="Dennis Sanchez" className="img-circle team-img" />
                <div className="caption">
                  <h3>Dennis Sanchez</h3>
                  <p>Compliance, Privacy &<br />Information Security Officer</p>
                  <p>Tennis genius. Moonlights as a <br /> chef, vet, and musician.</p>
                  <p>Follow <a href="https://twitter.com/dennycanta" target="blank" rel="noopener noreferrer">@dennycanta</a></p>
                  <p>dennis@workingwomenadvocates.org</p>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="thumbnail col-md-4">
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
        <GetInvolved />
      </div>
    </div>
  )
}

export default Team
