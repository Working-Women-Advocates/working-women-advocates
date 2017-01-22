import { connect } from 'react-redux';
import AdvocateDashboard from '../components/AdvocateDashboard';

function mapStateToProps(state) {
  return {
    issues: state.issues
  }
}

export default connect(mapStateToProps)(AdvocateDashboard);
