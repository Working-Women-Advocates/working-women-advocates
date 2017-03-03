import React from 'react'

export default () => {
  return (
    <main className="mdl-layout__content">
      <div className="page-content mdl-cell mdl-cell--6-col">
        <h1>Form submitted.</h1>
        <div className="card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">You have signed up.</h2>
          </div>
          <div className="mdl-card__supporting-text">
            <p>An advocate will be in touch with you shortly.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

