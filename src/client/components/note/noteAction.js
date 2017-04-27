import { v4 } from "uuid";
import { findIndex, propEq, slice } from "ramda";

import type from "../../constants/actionTypes";
import { getFirstActiveNote } from "./noteHelper";

export const addNote = note => ({
  type: type.NOTE_ADDED,
  note
});

export const toggleArchiveNote = id => ({
  type: type.NOTE_TOGGLED,
  id
});

export const changeActiveNote = id => ({
  type: type.ACTIVE_NOTE_CHANGED,
  id
});

export const changeNoteFilter = filter => ({
  type: type.NOTE_FILTER_CHANGED,
  filter
});

export const updateNoteTitle = (id, title) => ({
  type: type.NOTE_TITLE_UPDATED,
  id,
  title
});

export const updateNoteBody = (id, body) => ({
  type: type.NOTE_BODY_UPDATED,
  id,
  body
});

export const addNoteThenFocusToEdit = () => dispatch => {
  const newId = v4();
  const note = {
    id: newId,
    title: "Untitled Note",
    time: new Date().toString().substr(0, 24),
    body: "",
    archived: false
  };
  dispatch(addNote(note));
  dispatch(changeActiveNote(newId));
};

export const archiveThenChangeActiveNote = id => (dispatch, getState) => {
  dispatch(toggleArchiveNote(id));
  const state = getState();
  const { activeNoteId, notes } = state;
  if (activeNoteId === id) {
    const currIndex = findIndex(propEq("id", activeNoteId))(notes);
    const offsetNotes = slice(currIndex, notes.length, notes);
    const nextActiveNote = getFirstActiveNote(offsetNotes) || { id: null };
    dispatch(changeActiveNote(nextActiveNote.id));
  }
};
