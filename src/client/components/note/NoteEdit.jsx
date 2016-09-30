import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { find, propEq } from 'ramda';
import Textarea from 'react-textarea-autosize';

import { updateNoteTitle, updateNoteBody } from './noteAction';


class NoteEdit extends Component {
  componentWillReceiveProps() {
    this.nodeBody.focus();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) this.nodeForm.scrollTop = 0;
  }
  render() {
    const { id, time, title, body, handleTitle, handleBody } = this.props;
    return (
      <form
        className="w-100 h-list pa5 overflow-scroll"
        ref={node => { this.nodeForm = node; }}
      >
        <Textarea
          style={{ resize: 'none' }}
          className="input-reset w-100 bw0 mb1 pa0 f2 b black-70 lh-title"
          placeholder="Your title here..."
          type="text"
          value={title}
          onChange={(e) => handleTitle(id, e)}
        />
        <p className="f5 black-40 mb4">{time}</p>
        <Textarea
          style={{ resize: 'none' }}
          ref={node => { this.nodeBody = node; }}
          className="input-reset w-100 bw0 db black-80 h-list lh-copy"
          placeholder="Enter new note..."
          value={body}
          onChange={(e) => handleBody(id, e)}
        />
      </form>
    );
  }
}

NoteEdit.propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleTitle: PropTypes.func.isRequired,
  handleBody: PropTypes.func.isRequired,
};

const mapState = (state) => {
  const { notes, activeNoteId } = state;
  const getActiveNote = find(propEq('id', activeNoteId));
  const activeNote = getActiveNote(notes);

  const { id, time, title, body } = activeNote;
  return {
    id,
    time,
    title,
    body,
  };
};

const mapDispatch = (dispatch) => ({
  handleTitle: (id, e) => dispatch(updateNoteTitle(id, e.target.value)),
  handleBody: (id, e) => dispatch(updateNoteBody(id, e.target.value)),
});

export default connect(mapState, mapDispatch)(NoteEdit);
