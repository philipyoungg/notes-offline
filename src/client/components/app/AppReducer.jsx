import { combineReducers } from 'redux';

import { notes, activeNoteId, filterNote } from '../note/NoteReducer';

export default combineReducers({
  notes,
  activeNoteId,
  filterNote,
});
