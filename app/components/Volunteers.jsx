import React from 'react'
import { connect } from 'react-redux'

import VolunteerItem from './VolunteerItem'

/* ----------------- COMPONENT ------------------ */

const Volunteers = ({ volunteers }) => {
  return (
    <main className="mdl-layout__content dashboard">
      <div className="page-content mdl-cell mdl-cell--6-col">
        <h2>Volunteer Dashboard</h2>
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Name</th>
              <th>Email</th>
              <th>Interest</th>
              <th>Status</th>
              <th>Submitted</th>
            </tr>
          </thead>
          <tbody>
            { volunteers ? volunteers.map(volunteer => <VolunteerItem key={ volunteer.get('id') } volunteer={volunteer} />) : ''}
          </tbody>
          </table>
      </div>
    </main>
  )
}

/* ----------------- CONTAINER ------------------ */

const mapStateToProps = state => {
  return {
    volunteers: state.volunteers
  }
}

export default connect(mapStateToProps)(Volunteers)
