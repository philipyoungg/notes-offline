import { ifElse, map, cond, defaultTo, equals, when, assoc, evolve, prepend, not, propEq }
from 'ramda';
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
    body: `John just got home after a long meeting. He opens his apartment studio and scans the
    surrounding. There’s his bluetooth speaker, camera,
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

export const activeNoteId = (state = '0', action) =>
  ifElse(equals(type.ACTIVE_NOTE_CHANGED), action.id, state)(action.type);

export const filterNote = (state = 'SHOW_ALL', action) =>
  ifElse(equals(type.NOTE_FILTER_CHANGED), action.filter, state)(action.type);

export const notes = (state = defaultState, action) => {
  const isActionId = propEq('id', action.id);
  const toggleArchive = evolve({ archived: not });
  const changeTitle = assoc('title', action.title);
  const changeBody = assoc('title', action.title);
  const newNote = {
    id: action.id,
    title: 'Untitled Note',
    time: new Date().toString().substr(0, 24),
    body: '',
    archived: 0,
  };
  const newState = cond([
    [equals(type.NOTE_ADDED), prepend(newNote)(state)],
    [equals(type.NOTE_TOGGLED), map(when(isActionId, toggleArchive))(state)],
    [equals(type.NOTE_TITLE_UPDATED), map(when(isActionId, changeTitle))(state)],
    [equals(type.NOTE_BODY_UPDATED), map(when(isActionId, changeBody))(state)],
  ])(action.type);
  return defaultTo(state, newState);
};
