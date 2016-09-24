import { v4 } from 'uuid';

export const addNote = (id) => ({
  type: 'ADD_NOTE',
  id,
});

export const changeActiveNote = (id) => ({
  type: 'CHANGE_ACTIVE_NOTE',
  id,
});

export const updateNote = (id, body) => ({
  type: 'UPDATE_NOTE',
  id,
  body,
});

export const updateNoteTitle = (id, title) => ({
  type: 'UPDATE_NOTE_TITLE',
  id,
  title,
});

export const addNoteAndFocusToEdit = () => (dispatch) => {
  const id = v4();
  dispatch(addNote(id));
  dispatch(changeActiveNote(id));
};
