import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import persistentState from 'redux-localstorage';

import reducer from '../components/app/AppReducer';

const store = createStore(
  reducer,
  persistentState(),
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunk, logger())
);

export default store;
