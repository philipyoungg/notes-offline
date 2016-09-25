import React from 'react';
import NoteList from './NoteList';
import NoteEdit from './NoteEdit';

const NoteContainer = () => (
  <div className="flex flex-row flex-nowrap">
    <NoteList />
    <NoteEdit />
  </div>
);

export default NoteContainer;
