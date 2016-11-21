import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { notes, activeNoteId, filterNote } from '../note/NoteReducer';

export default combineReducers({
  notes,
  activeNoteId,
  filterNote,
  router: routerStateReducer,
});
