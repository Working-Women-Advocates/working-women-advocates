import React, { Component } from 'react';
import ViewIssueItem from './ViewIssueItem'

export default ({ issues }) => {
  return (
    <main className="mdl-layout__content dashboard">
      <div className="page-content mdl-cell mdl-cell--6-col">
        <h2>Admin Dashboard</h2>
        <h4>All Cases</h4>
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Username</th>
              <th>Contact</th>
              <th>Submitted</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { issues ? issues.map(issue => <ViewIssueItem key={ issue.id } issue={issue} />) : ''}
          </tbody>
          </table>
      </div>
    </main>
  )
}
