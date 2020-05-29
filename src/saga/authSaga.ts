import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { AuthActions, login } from 'reducers/authReducer';
import api from 'saga/repository/authSaga';

function* authSaga() {
  const auth = yield call(api);
  yield put(login.success(auth));
}

export const watchAuth = [takeLatest(AuthActions.LOGIN_START, authSaga)];
