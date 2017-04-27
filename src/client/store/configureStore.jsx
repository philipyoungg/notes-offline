import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage'

import reducer from '../components/app/AppReducer';

// const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(
  reducer,
  // preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(thunk, logger()),
    // persistState(),
  )
);

export default store;
