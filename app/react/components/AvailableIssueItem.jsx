import React from 'react'

export default ({ issue }) => {
  return (
    <tr>
      <td className="mdl-data-table__cell--non-numeric">{issue.get('username')}</td>
      <td>{issue.get('contact_method')}</td>
      <td>{issue.get('description')}</td>
      <td>{issue.get('created_at').slice(0, 10)}</td>
      <td><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent indigo-btn">View</button></td>
      <td><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Become Advocate</button></td>
    </tr>
  )
}
