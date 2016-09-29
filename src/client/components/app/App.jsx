import React from 'react';

import NoteMenu from '../note/NoteMenu';
import NoteContainer from '../note/NoteContainer';

import { addNoteThenFocusToEdit } from '../note/NoteAction';

const App = (props) => (
  <div className="w-100 vh-100 overflow-hidden">
    <NoteMenu {...props} onClick={addNoteThenFocusToEdit} />
    <NoteContainer {...props} />
  </div>
);

export default App;
