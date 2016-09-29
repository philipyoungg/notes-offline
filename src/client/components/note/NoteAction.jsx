import { v4 } from 'uuid';
import type from '../../constants/actionTypes';
import findFromIndex from '../../utils/findFromIndex';

export const addNote = (id) => ({
  type: type.ADD_NOTE,
  id,
});

export const toggleArchiveNote = (id) => ({
  type: type.TOGGLE_ARCHIVE_NOTE,
  id,
});

export const changeActiveNote = (id) => ({
  type: type.CHANGE_ACTIVE_NOTE,
  id,
});

export const changeNoteFilter = (filter) => ({
  type: type.CHANGE_NOTE_FILTER,
  filter,
});

export const updateNoteBody = (id, body) => ({
  type: type.UPDATE_NOTE_BODY,
  id,
  body,
});

export const updateNoteTitle = (id, title) => ({
  type: type.UPDATE_NOTE_TITLE,
  id,
  title,
});

export const addNoteThenFocusToEdit = () => (dispatch) => {
  const id = v4();
  dispatch(addNote(id));
  dispatch(changeActiveNote(id));
};

export const archiveThenChangeActiveNote = (id) => (dispatch, getState) => {
  dispatch(toggleArchiveNote(id));
  const activeNoteId = getState().activeNoteId;
  const notes = getState().notes;
  if (activeNoteId === id) {
    const indexOfCurrId = notes.findIndex(note => activeNoteId === note.id);
    const nextActiveId = findFromIndex(['archived', 0], indexOfCurrId, notes).id;
    dispatch(changeActiveNote(nextActiveId));
  }
};
