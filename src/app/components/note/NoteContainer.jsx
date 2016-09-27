import React from 'react';
import NoteList from './NoteList';
import NoteEdit from './NoteEdit';

const NoteContainer = () => (
  <div className="fixed flex flex-row flex-nowrap w-100 mt5">
    <NoteList />
    <NoteEdit />
  </div>
);

export default NoteContainer;
