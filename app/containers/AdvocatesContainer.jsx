import { connect } from 'react-redux'
import Advocates from '../components/Advocates'

function mapStateToProps (state) {
  return {
    advocates: state.advocates
  }
}

export default connect(mapStateToProps)(Advocates)
