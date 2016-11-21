import React from 'react';
import { Route } from 'react-router';
import App from '../components/app/App';
import NoteContainer from '../components/note/NoteContainer';

const routes = (
  <Route path="/" component={App}>
    <Route path="notes" component={NoteContainer} />
  </Route>
);

export default routes;
