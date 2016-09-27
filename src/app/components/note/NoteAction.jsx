import { v4 } from 'uuid';
import type from '../../constants/actionTypes';

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

const findObjWithOffset = (props, startIndex, array) => {
  let i = startIndex + 1;
  while (array[i][props[0]] !== props[1] && i <= array.length) {
    i++;
  }
  return array[i];
};

export const archiveThenChangeActiveNote = (id) => (dispatch, getState) => {
  const activeNote = getState().activeNote;
  dispatch(toggleArchiveNote(id));
  if (activeNote === id) {
    //
    const notes = getState().notes;
    const currIndex = notes.findIndex(note => note.id === id);
    const nextId = findObjWithOffset(['archived', 0], currIndex, notes).id;
    dispatch(changeActiveNote(nextId));
  } else {
    return;
  }
};
