import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import NoteItem from './NoteItem';

const NoteList = ({ notes }) => (
  <div className="h-list mw5 overflow-scroll br b--near-white flex-shrink-0">
    {notes.map(note =>
      <NoteItem
        key={note.id}
        {...note}
      />
    )}
  </div>
);

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
};

const mapState = (state) => ({
  notes: state.notes.data,
});

export default connect(mapState)(NoteList);
