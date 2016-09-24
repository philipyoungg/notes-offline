import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNoteAndFocusToEdit } from './NoteAction';

const NoteMenu = ({ dispatch }) => (
  <div
    className="flex items-center pa2 w-100 bb b--near-white"
  >
    <p
      onClick={() => {
        dispatch(addNoteAndFocusToEdit());
      }}
      className="f6 ba br2 b--black-30 pv2 ph3 mb0 dim"
    >Add New Note</p>
  </div>
);

NoteMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(NoteMenu);
