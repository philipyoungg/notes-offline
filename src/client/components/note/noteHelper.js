import { compose, find, prop, propEq, filter } from 'ramda';

const id = prop('id');
export const activeNote = propEq('archived', false);
export const inActiveNote = propEq('archived', true);
export const filterActiveNotes = filter(activeNote);
export const filterInactiveNotes = filter(inActiveNote);
export const getFirstActiveNote = find(activeNote);
