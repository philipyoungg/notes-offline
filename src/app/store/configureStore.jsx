import { applyMiddleware, createStore } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../components/app/AppReducer';

const handleRoute = routerMiddleware(hashHistory);

const store = createStore(
  reducer,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunk, handleRoute, logger())
);

export default store;
