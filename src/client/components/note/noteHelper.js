import { compose, find, prop, propEq, filter } from 'ramda';

const id = prop('id');
export const activeNote = propEq('archived', 0);
export const inActiveNote = propEq('archived', 1);
export const filterActiveNotes = filter(activeNote);
export const filterInactiveNotes = filter(inActiveNote);
export const getActiveId = compose(id, find(activeNote));
