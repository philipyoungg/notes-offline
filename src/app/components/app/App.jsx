import React, { PropTypes } from 'react';
import NoteMenu from '../note/NoteMenu';
import NoteContainer from '../note/NoteContainer';

const App = () => (
  <div className="w-100 vh-100 overflow-hidden">
    <NoteMenu />
    <NoteContainer />
  </div>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
