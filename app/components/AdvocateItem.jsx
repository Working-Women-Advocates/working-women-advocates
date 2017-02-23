import React from 'react'

export default ({ advocate }) => {
  return (
    <tr>
      <td className="mdl-data-table__cell--non-numeric">{advocate.first_name} {advocate.last_name}</td>
      <td>{advocate.username}</td>
      <td>{advocate.email}</td>
      <td>{advocate.created_at.slice(0, 10)}</td>
    </tr>
  )
}
