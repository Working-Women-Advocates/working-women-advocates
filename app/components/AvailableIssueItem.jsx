import React from 'react'

export default ({ issue }) => {
  return (
    <tr>
      <td className="mdl-data-table__cell--non-numeric">{issue.username}</td>
      <td>{issue.contact_method}</td>
      <td>{issue.description}</td>
      <td>{issue.created_at.slice(0, 10)}</td>
      <td><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent indigo-btn">View</button></td>
      <td><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Become Advocate</button></td>
    </tr>
  )
}
