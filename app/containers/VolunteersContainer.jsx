import { connect } from 'react-redux'
import Volunteers from '../components/Volunteers'

function mapStateToProps (state) {
  return {
    volunteers: state.volunteers
  }
}

export default connect(mapStateToProps)(Volunteers)
