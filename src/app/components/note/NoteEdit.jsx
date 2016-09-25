import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateNoteTitle, updateNoteBody } from './NoteAction';

const NoteEdit = ({ id, time, title, body, dispatch }) => (
  <form className="w-100 pa4">
    <input
      className="input-reset w-100 bw0 mb1 pa0 f2 b black-70 lh-title"
      placeholder="Your title here..."
      type="text"
      value={title}
      onChange={(e) => { dispatch(updateNoteTitle(id, e.target.value)); }}
    />
    <p className="f5 black-40 mb4">{time}</p>
    <textarea
      className="input-reset w-100 h-100 bw0 db black-80 lh-copy"
      placeholder="Enter new note..."
      cols="10"
      rows="30"
      value={body}
      onChange={(e) => { dispatch(updateNoteBody(id, e.target.value)); }}
    />
  </form>
);

NoteEdit.propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapState = (state) => {
  const { data } = state.notes;
  const activeNote = data.find((note) => state.notes.activeNote === note.id);
  return {
    id: activeNote.id,
    time: activeNote.time,
    title: activeNote.title,
    body: activeNote.body,
  };
};

export default connect(mapState)(NoteEdit);
