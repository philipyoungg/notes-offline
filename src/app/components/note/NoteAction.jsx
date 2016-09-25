import { v4 } from 'uuid';
import type from '../../constants/actionTypes';

export const addNote = (id) => ({
  type: type.ADD_NOTE,
  id,
});

export const changeActiveNote = (id) => ({
  type: type.CHANGE_ACTIVE_NOTE,
  id,
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

export const addNoteAndFocusToEdit = () => (dispatch) => {
  const id = v4();
  dispatch(addNote(id));
  dispatch(changeActiveNote(id));
};
