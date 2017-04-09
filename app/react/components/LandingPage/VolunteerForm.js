import React from 'react'

const VolunteerForm = (props) => {
  return (
    <tr>
      <td className="form-label">What's your gig?</td>
      <td>
        <input
          type="text"
          className="text-field"
          name="volunteer-interest"
          value={props.volunteerInterest}
          onChange={props.handleFormChange}
        />
      </td>
    </tr>
  )
}

export default VolunteerForm
