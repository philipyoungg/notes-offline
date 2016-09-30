import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from '../client/components/app/App';
import reducer from '../client/components/app/AppReducer';

const app = express();
app.use(express.static(`${__dirname}/../../dist/app`));
const port = 3000;

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

const renderFullPage = (html, preloadedState) => (`
  <!DOCTYPE html>
  <html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.5.2/tachyons.min.css ">
    <title>It works!</title>
  </head>
  <body class="black-70">
    <div id="app">
      ${html}
    </div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
    </script>
    <script src="bundle.js"></script>
  </body>
  </html>
`);

const handleRender = (req, res) => {
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const preloadedState = store.getState();

  res.send(renderFullPage(html, preloadedState));
};


app.use(handleRender);

app.listen(port, () => console.log('connected!'));
