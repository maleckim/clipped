import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';

export default function* watchUserAuthentication() {
  yield takeLatest('REGISTER_USER', registerSaga);
  yield takeLatest('LOGIN_USER', loginSaga);
}
