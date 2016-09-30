import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../components/app/AppReducer';

const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(
  reducer,
  preloadedState,
  compose(
    applyMiddleware(thunk, logger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
