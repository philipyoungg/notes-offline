import { map, when, assoc, evolve, prepend, not, propEq } from 'ramda';
import createReducer from '../../utils/createReducer';
import type from '../../constants/actionTypes';

const defaultState = [
  { id: '0',
    time: 'Today, 20:03',
    title: 'The beautiful of life',
    body: 'What we, as a human, think when people make this shit happens? Love? shit?',
    archived: 1,
  },
  { id: '1',
    time: 'Today, 20:03',
    title: 'Nolan, Christopher',
    body: 'This is a very special life of me?',
    archived: 0,
  },
  {
    id: '2',
    time: 'Yesterday, 20:00',
    title: 'Lost in the world',
    body: 'Motherfuckra',
    archived: 0,
  },
  {
    id: '3',
    time: '2 January, 2016, 01:00',
    title: 'Change the life, change environment',
    archived: 0,
    body: `John just got home after a long meeting. He opens his apartment studio and scans
    the surrounding. There’s his bluetooth speaker, camera,
    iPad, and his favorite couch.

“Gosh, I’m tired. I guess I’ll watch some movies before I have my dinner”.

John went to the couch and fire his Netflix.

2 hours later, the movie ended. He turned his hand and look at his casio watch.
It says 9:32. Surprised, he rosed from the couch and went straight to the
kitchen. He eyed the top drawer and opened it. It’s a sacred place where all of the food are stored.

“Found it”. He open the instant noodle and cook it for dinner.

Dinner is ready. He went back to his couch and eats it—waiting for the commercial to end.

“Bzz… bzzz…”—his phone vibrates. He look at his phone. It’s a notification from his to do list.

“Get in shape for summer!”

He looked at his phone display, and presed [dismiss] button.

“I’ll start tomorrow.”

Clearly, not the first time he say this word.`,
  },
];

// addNewNote:: [a] -> {k: v} -> [a]
const addNewNote = (state, action) =>
  prepend(action.note)(state);

// toggleSpecificNote:: [a] -> {k: v} -> [a]
const toggleSpecificNote = (state, action) =>
  map(when(propEq('id', action.id), evolve({ archived: not })))(state);

// updateSpecificNoteTitle:: [a] -> {k: v} -> [a]
const updateSpecificNoteTitle = (state, action) =>
  map(when(propEq('id', action.id), assoc('title', action.title)))(state);

// updateSpecificNoteBody:: [a] -> {k: v} -> [a]
const updateSpecificNoteBody = (state, action) =>
  map(when(propEq('id', action.id), assoc('body', action.body)))(state);

// updateActiveNoteId:: String -> {k: v} -> String
const updateActiveNoteId = (state, action) =>
  action.id;

// updateFilterNote:: String -> {k: v} -> String
const updateFilterNote = (state, action) =>
  action.filter;

const noteHandlers = {
  [type.NOTE_ADDED]: addNewNote,
  [type.NOTE_TOGGLED]: toggleSpecificNote,
  [type.NOTE_TITLE_UPDATED]: updateSpecificNoteTitle,
  [type.NOTE_BODY_UPDATED]: updateSpecificNoteBody,
};

const activeNoteIdHandlers = {
  [type.ACTIVE_NOTE_CHANGED]: updateActiveNoteId,
};

const filterNoteHandlers = {
  [type.NOTE_FILTER_CHANGED]: updateFilterNote,
};

export const activeNoteId = createReducer('0', activeNoteIdHandlers);
export const notes = createReducer(defaultState, noteHandlers);
export const filterNote = createReducer('SHOW_ALL', filterNoteHandlers);
