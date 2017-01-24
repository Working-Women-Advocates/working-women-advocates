import React, { Component } from 'react';

export default ({issue}) => {
  return (
    <tr>
      <td className="mdl-data-table__cell--non-numeric">{issue.username}</td>
      <td>{issue.advocate ? issue.advocate.username : ''}</td>
      <td>{issue.contact_method}</td>
      <td>{issue.description}</td>
      <td>{issue.created_at.slice(0, 10)}</td>
      <td>{issue.status}</td>
      <td><button className="indigo-btn mdl-button mdl-js-button mdl-button--raised mdl-button--accent">View</button></td>
      {issue.status === 'open' ? <td><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Re-Assign</button></td> : <td>  </td> }
      {issue.status === 'open' ? <td><button className="close-btn mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Close</button></td> : <td>  </td> }
    </tr>
  )
}
