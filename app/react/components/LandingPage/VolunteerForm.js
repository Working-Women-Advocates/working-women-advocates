import React from 'react'

const VolunteerForm = (props) => {
  return (
    <tr>
      <td className="form-label">How would you like to help?</td>
      <td>
        <input
          type="text"
          className="form-label"
          name="message-body"
          value={props.messageBody}
          onChange={props.handleFormChange}
        />
      </td>
    </tr>
  )
}

export default VolunteerForm
