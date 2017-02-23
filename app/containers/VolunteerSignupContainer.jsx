import { connect } from 'react-redux'
import VolunteerSignup from '../components/VolunteerSignup'
import { volunteerSignup } from '../reducers/auth'
import { browserHistory } from 'react-router'

function mapDispatchToProps (dispatch) {
  return {
    signup: (username, email, interest) => {
      dispatch(volunteerSignup(username, email, interest))
      browserHistory.push('/signup-submitted')
    }
  }
}

export default connect(null, mapDispatchToProps)(VolunteerSignup)
