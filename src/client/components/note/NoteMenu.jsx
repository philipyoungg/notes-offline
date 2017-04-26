import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNoteThenFocusToEdit } from './noteAction';

const NoteMenu = ({ handleClick }) => (
  <div className="flex justify-between items-center fixed w-100 h3 ph4 bb b--near-white">
    <p
      onClick={() => handleClick()}
      className="f6 ba br2 b--black-30 pv2 ph3 mb0 dim"
    > Add New Note </p>
    <p className='f6 o-70 mb0'>Works offline!</p>
    
    
  </div>
);


NoteMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

const mapDispatch = (dispatch) => ({
  handleClick: () => dispatch(addNoteThenFocusToEdit()),
});

export default connect(null, mapDispatch)(NoteMenu);
