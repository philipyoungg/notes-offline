import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Link, Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from './components/app/App'
import Counter from './components/counter/Counter'

import store from './store/configureStore'

const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
