import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateNoteTitle, updateNoteBody } from './NoteAction';

import TextArea from './TextArea';

const NoteEdit = ({ id, time, title, body, handleTitle, handleBody }) => (
  <form className="w-100 pa4 vh-100 overflow-scroll">
    <input
      className="input-reset w-100 bw0 mb1 pa0 f2 b black-70 lh-title"
      placeholder="Your title here..."
      type="text"
      value={title}
      onChange={(input) => { handleTitle(id, input); }}
      onFocus={(e) => { e.target.select(); }}
    />
    <p className="f5 black-40 mb4">{time}</p>
    <TextArea id={id} body={body} handleBody={handleBody} />
  </form>
);

NoteEdit.propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleTitle: PropTypes.func.isRequired,
  handleBody: PropTypes.func.isRequired,
};

const mapState = (state) => {
  const { data, activeNote } = state.notes;
  const note = data.find((n) => activeNote === n.id);
  return {
    id: note.id,
    time: note.time,
    title: note.title,
    body: note.body,
  };
};

const mapDispatch = (dispatch) => ({
  handleTitle: (id, e) => { dispatch(updateNoteTitle(id, e.target.value)); },
  handleBody: (id, e) => { dispatch(updateNoteBody(id, e.target.value)); },
});

export default connect(mapState, mapDispatch)(NoteEdit);
