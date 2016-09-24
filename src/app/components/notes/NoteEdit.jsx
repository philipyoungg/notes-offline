import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TextArea from './TextArea';

const NoteEdit = ({ time, title, body }) => {
  return (
    <div className="w-100 pa4">
      <h1 className="f2 mb1" contentEditable="">{title}</h1>
      <p className="f5 black-40 mb4">{time}</p>
      <textarea
        className="w-100 h-100 b--transparent input-reset db black-80 lh-copy"
        cols="30"
        rows="10"
        value={body}
      />
    </div>
  );
};

NoteEdit.propTypes = {
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

const mapState = (state) => ({
  time: state.notes.data[state.notes.activeNote].time,
  title: state.notes.data[state.notes.activeNote].title,
  body: state.notes.data[state.notes.activeNote].body,
});

export default connect(mapState)(NoteEdit);
