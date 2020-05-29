import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from 'reducers/rootReducer';
import { login, logout } from 'reducers/authReducer';
import App from 'App';

const mapDispatchToProps = (dispatch: Dispatch) => {
  loggedIn: () => {dispatch()}
  loggedOut: () => {dispatch(logout())}
 => };
