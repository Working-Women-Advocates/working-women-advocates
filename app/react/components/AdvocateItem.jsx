import React from 'react'

export default ({ advocate }) => {
  return (
    <tr>
      <td className="mdl-data-table__cell--non-numeric">{advocate.get('first_name')} {advocate.get('last_name')}</td>
      <td>{advocate.get('username')}</td>
      <td>{advocate.get('email')}</td>
      <td>{advocate.get('created_at').slice(0, 10)}</td>
    </tr>
  )
}
