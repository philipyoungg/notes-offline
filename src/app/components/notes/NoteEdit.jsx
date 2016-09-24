import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TextArea from './TextArea';

const NoteEdit = ({ id, time, title, body }) => (
  <div className="w-100 pa4">
    <h1 className="f2 mb1">{title}</h1>
    <p className="f5 black-40 mb4">{time}</p>
    <TextArea
      value={body}
      id={id}
    />
  </div>
);

NoteEdit.propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapState = (state) => {
  let activeNote = state.notes.data.filter(note => state.notes.activeNote === note.id);
  activeNote = activeNote[0];
  return {
    id: activeNote.id,
    time: activeNote.time,
    title: activeNote.title,
    body: activeNote.body,
  };
};

export default connect(mapState)(NoteEdit);
