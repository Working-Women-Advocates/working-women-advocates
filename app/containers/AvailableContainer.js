import { connect } from 'react-redux';
import AvailableDashboard from '../components/AvailableDashboard';

function mapStateToProps(state) {
  return {
    issues: state.issues
  }
}

export default connect(mapStateToProps)(AvailableDashboard);
