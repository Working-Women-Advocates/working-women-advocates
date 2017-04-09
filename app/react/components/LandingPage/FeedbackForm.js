import React from 'react'

const FeedbackForm = (props) => {
  return (
    <tr>
      <td colSpan={2}>
        <textarea
          className="form-label"
          name="message-body"
          value={props.messageBody}
          onChange={props.handleFormChange}
        />
      </td>
    </tr>
  )
}

export default FeedbackForm
