import React, { Component } from 'react';

export default ({volunteer}) => {
  return (
    <tr>
      <td className="mdl-data-table__cell--non-numeric">{volunteer.username}</td>
      <td>{volunteer.email}</td>
      <td>{volunteer.interest}</td>
      <td>{volunteer.status}</td>
      <td>{volunteer.created_at.slice(0, 10)}</td>
    </tr>
  )
}
