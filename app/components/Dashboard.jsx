import React, { Component } from 'react';
import IssueItem from './IssueItem'

export default () => {
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
            <IssueItem />
          </tbody>
          </table>
      </div>
    </main>
  )
}
