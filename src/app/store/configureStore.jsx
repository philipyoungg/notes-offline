import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { reducer } from '../components/app/AppReducer'

const store = createStore(
  reducer,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunk, logger())
)

export default store
