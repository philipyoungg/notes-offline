import React from 'react';
import NoteMenu from '../notes/NoteMenu';
import NoteContainer from '../notes/NoteContainer';

const App = () => (
  <div className="w-100 vh-100 overflow-hidden">
    <NoteMenu />
    <NoteContainer />
  </div>
);

export default App;
