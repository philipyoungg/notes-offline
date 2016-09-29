import { combineReducers } from 'redux';

import { notes, activeNote, filterNote } from '../note/NoteReducer';

export default combineReducers({
  notes,
  activeNote,
  filterNote,
});
