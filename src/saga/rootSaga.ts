import { all, fork } from 'redux-saga/effects';
import { watchAuth } from 'saga/authSaga';

export default function* rootSaga() {
  yield all([...watchAuth]);
}
