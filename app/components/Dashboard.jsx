import React, { Component } from 'react';
import IssueItem from './IssueItem'

export default ({ issues }) => {
  return (
    <main className="mdl-layout__content dashboard">
      <div className="page-content mdl-cell mdl-cell--6-col">
        <h1>Advocate Dashboard</h1>
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
            { issues ? issues.map(issue => <IssueItem key={ issue.id } issue={issue} />) : ''}
          </tbody>
          </table>
      </div>
    </main>
  )
}
