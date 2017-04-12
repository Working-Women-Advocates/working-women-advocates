import React from 'react'

const FormSubmitted = (props) => {
  if (props.status === 201) {
    return (
      <div>
        <h3>Thanks!</h3>
      </div>
    )
  } else {
    return (
      <div>
        <h3>Sorry, the form failed to submit.</h3>
      </div>
    )
  }
}

export default FormSubmitted
