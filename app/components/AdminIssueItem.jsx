import React from 'react'

export default ({ issue }) => {
  return (
    <tr>
      <td className="mdl-data-table__cell--non-numeric">{issue.get('username')}</td>
      <td>{issue.get('advocate') ? issue.getIn(['advocate', 'username']) : ''}</td>
      <td>{issue.get('contact_method')}</td>
      <td>{issue.get('description')}</td>
      <td>{issue.get('created_at').slice(0, 10)}</td>
      <td>{issue.get('status')}</td>
      <td><button className="indigo-btn mdl-button mdl-js-button mdl-button--raised mdl-button--accent">View</button></td>
      {issue.get('status') === 'open' ? <td><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Re-Assign</button></td> : <td> </td> }
      {issue.get('status') === 'open' ? <td><button className="close-btn mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Close</button></td> : <td> </td> }
    </tr>
  )
}
