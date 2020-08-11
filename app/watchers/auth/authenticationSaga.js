import { put, call } from 'redux-saga/effects';
import {
  registerUserService,
  loginUserService,
} from '../../services/authenticationService';

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield [put({ type: 'REGISTER_USER_SUCCESS', response })];
  } catch (error) {
    yield put({ type: 'REGISTER_USER_ERROR', error });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield put({ type: 'LOGIN_USER_SUCCESS', response });
  } catch (error) {
    yield put({ type: 'LOGIN_USER_ERROR', error });
  }
}
