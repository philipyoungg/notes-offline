import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import NoteItem from './NoteItem';

const NoteList = ({ notes }) => (
  <div className="vh-100 overflow-scroll mw5 br b--near-white flex-shrink-0">
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
