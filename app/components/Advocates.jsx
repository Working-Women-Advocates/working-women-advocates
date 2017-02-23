import React from 'react'
import AdvocateItem from './AdvocateItem'

export default ({ advocates }) => {
  return (
    <main className="mdl-layout__content dashboard">
      <div className="page-content mdl-cell mdl-cell--6-col">
        <h2>Advocate Dashboard</h2>
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Started</th>
            </tr>
          </thead>
          <tbody>
            { advocates ? advocates.map(advocate => <AdvocateItem key={ advocate.id } advocate={advocate} />) : ''}
          </tbody>
          </table>
      </div>
    </main>
  )
}
