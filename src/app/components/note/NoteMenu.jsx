import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNoteThenFocusToEdit } from './NoteAction';

const NoteMenu = ({ handleClick }) => (
  <div
    className="fixed flex items-center h3 w-100 pl3 bb b--near-white"
  >
    <p
      onClick={() => { handleClick(); }}
      className="f6 ba br2 b--black-30 pv2 ph3 mb0 dim"
    >Add New Note</p>
  </div>
);

NoteMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch) => ({
  handleClick: () => { dispatch(addNoteThenFocusToEdit()); },
});

export default connect(null, mapDispatch)(NoteMenu);
