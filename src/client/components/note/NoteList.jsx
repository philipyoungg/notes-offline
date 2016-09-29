import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import NoteItem from './NoteItem';

const NoteList = ({ notes }) => (
  <div
    className="overflow-scroll mw5 w-100 h-list br b--near-white flex-shrink-0 overflow-scroll"
  >
    {
      notes.length > 0 ?
        notes.map(note =>
          <NoteItem
            key={note.id}
            {...note}
          />)
        :
        <p>No active notes</p>
    }
  </div>
);

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
};

const filterActiveNotes = (notes) => notes.filter(note => note.archived === 0);
// const filterInactiveNotes = (notes) => notes.filter(note => note.archived === 1);


const mapState = ({ notes }) => ({
  notes: filterActiveNotes(notes),
});

export default connect(mapState)(NoteList);
