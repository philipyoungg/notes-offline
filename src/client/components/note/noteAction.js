import { v4 } from 'uuid';

import { findIndex, propEq, slice } from 'ramda';

import type from '../../constants/actionTypes';
import getActiveId from './noteHelper';

export const addNote = (id) => ({
  type: type.NOTE_ADDED,
  id,
});

export const toggleArchiveNote = (id) => ({
  type: type.NOTE_TOGGLED,
  id,
});

export const changeActiveNote = (id) => ({
  type: type.ACTIVE_NOTE_CHANGED,
  id,
});

export const changeNoteFilter = (filter) => ({
  type: type.NOTE_FILTER_CHANGED,
  filter,
});

export const updateNoteBody = (id, body) => ({
  type: type.NOTE_BODY_UPDATED,
  id,
  body,
});

export const updateNoteTitle = (id, title) => ({
  type: type.NOTE_TITLE_UPDATED,
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
  const state = getState();
  const {
    activeNoteId,
    notes,
  } = state;
  if (activeNoteId === id) {
    const getCurrIndexId = findIndex(propEq('id', activeNoteId));
    const currIndex = getCurrIndexId(notes);
    const nextActiveId = getActiveId(slice(currIndex, notes.length, notes));
    dispatch(changeActiveNote(nextActiveId));
  }
};
