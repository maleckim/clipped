/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import homeReducer from 'containers/HomePage/reducer';
import clipsReducer from 'containers/Clips/reducer';
import loginReducer from 'containers/LoginPage/reducer';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    home: homeReducer,
    clips: clipsReducer,
    login: loginReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
