import { put, call } from 'redux-saga/effects';
import { clipService } from '../../services/clipService';

export function* upVoteSaga(payload) {
  try {
    const response = yield call(clipService, payload);

    yield put({ type: 'USER_UPVOTE_SUCCESS', response });
  } catch (error) {
    yield put({ type: 'USER_UPVOTE_ERROR', error });
  }
}
