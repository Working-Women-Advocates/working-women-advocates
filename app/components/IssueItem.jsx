import React, { Component } from 'react';

export default ({issue}) => {
  return (
    <tr>
      <td className="mdl-data-table__cell--non-numeric">{issue.working_woman_id)}</td>
      <td>Skype</td>
      <td>{issue.created_at}</td>
      <td><button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Claim</button></td>
    </tr>
  )
}
