import { connect } from 'react-redux';
import Auth from 'components/Auth';
import { RootState } from 'reducers/rootReducer';

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.authReducer.isLoggedIn,
});

export default connect(mapStateToProps, null)(Auth);
