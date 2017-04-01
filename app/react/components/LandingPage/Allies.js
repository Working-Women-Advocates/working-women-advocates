import React from 'react'

const { Grid, Row, Col } = require('react-flexgrid')

const Allies = () => {
  return (
      <Grid>
        <h2>Each woman will be connected to an ally</h2>

        <div className="alliesSection">
          <Row>
            <Col xs={12} md={6}>
              <h3>Therapy</h3>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              <button>Read More</button>
            </Col>
            <Col xs={12} md={6}>
              <img src="img/TEMP-img-box.png" />
            </Col>
          </Row>
        </div>

        <div className="alliesSection">
          <Row>
            <Col xs={12} md={6}>
              <img src="img/TEMP-img-box.png" />
            </Col>
            <Col xs={12} md={6}>
              <h3>Legal Advice</h3>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              <button>Read More</button>
            </Col>
          </Row>
        </div>

        <div className="alliesSection">
          <Row>
              <Col xs={12} md={6}>
                <h3>Financial Advice</h3>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <button>Read More</button>
              </Col>
            <Col xs={12} md={6}>
              <img src="img/TEMP-img-box.png" />
            </Col>
          </Row>
        </div>

        <div className="alliesSection">
          <Row>
            <Col xs={12} md={6}>
              <img src="img/TEMP-img-box.png" />
            </Col>
            <Col xs={12} md={6}>
              <h3>Job Coaching</h3>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
              <button>Read More</button>
            </Col>
          </Row>
        </div>

      </Grid>
  )
}

export default Allies
