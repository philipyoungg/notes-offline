import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TextArea from './TextArea';

const NoteEdit = ({ id, time, title, body }) => (
  <div className="w-100 pa4">
    <h1 className="f2 mb1" contentEditable="">{title}</h1>
    <p className="f5 black-40 mb4">{time}</p>
    <TextArea
      value={body}
      id={id}
    />
  </div>
);

NoteEdit.propTypes = {
  id: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

const mapState = (state) => {
  const notes = state.notes;
  return {
    id: notes.activeNote,
    time: notes.data[notes.activeNote].time,
    title: notes.data[notes.activeNote].title,
    body: notes.data[notes.activeNote].body,
  };
};

export default connect(mapState)(NoteEdit);
