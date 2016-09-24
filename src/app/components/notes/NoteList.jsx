import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Note from './Note';

const NoteList = ({ notes }) => (
  <div className="h-100 mw5 overflow-scroll br b--near-white flex-shrink-0">
    {notes.map(note =>
      <Note
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
