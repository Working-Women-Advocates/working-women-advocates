import { connect } from 'react-redux';
import AdminDashboard from '../components/AdminDashboard';

function mapStateToProps(state) {
  return {
    issues: state.issues
  }
}

export default connect(mapStateToProps)(AdminDashboard);
