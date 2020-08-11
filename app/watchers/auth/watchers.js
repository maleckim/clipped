import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import { upVoteSaga } from '../clips/clipSaga';

export default function* watchUserAuthentication() {
  yield takeLatest('REGISTER_USER', registerSaga);
  yield takeLatest('LOGIN_USER', loginSaga);
  yield takeLatest('UPVOTE_CLIP', upVoteSaga);
}

// Unlike takeEvery, takeLatest allows only one fetchData task to run at any moment. And it will be the latest started task. If a previous task is still running when another fetchData task is started, the previous task will be automatically cancelled.

// If you have multiple Sagas watching for different actions, you can create multiple watchers with those built-in helpers, which will behave like there was fork used to spawn them (we'll talk about fork later. For now, consider it to be an Effect that allows us to start multiple sagas in the background).

// For example:

// import { takeEvery } from 'redux-saga/effects'

// // FETCH_USERS
// function* fetchUsers(action) { ... }

// // CREATE_USER
// function* createUser(action) { ... }

// // use them in parallel
// export default function* rootSaga() {
//   yield takeEvery('FETCH_USERS', fetchUsers)
//   yield takeEvery('CREATE_USER', createUser)
// }
