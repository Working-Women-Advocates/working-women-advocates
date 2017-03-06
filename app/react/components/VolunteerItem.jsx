import React from 'react'

export default ({ volunteer }) => {
  return (
    <tr>
      <td className="mdl-data-table__cell--non-numeric">{volunteer.get('username')}</td>
      <td>{volunteer.get('email')}</td>
      <td>{volunteer.get('interest')}</td>
      <td>{volunteer.get('status')}</td>
      <td>{volunteer.get('created_at').slice(0, 10)}</td>
    </tr>
  )
}
