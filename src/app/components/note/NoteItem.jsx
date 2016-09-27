import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeActiveNote } from './NoteAction';

const Note = ({ id, time, title, body, active, handleClick }) => {
  const bg = active ? 'bg-near-white' : '';
  return (
    <div
      onClick={() => { handleClick(id); }}
      className={`pa3 db bb b--near-white ${bg}`}
    >
      <p className="f7 mb2 black-40">{time}</p>
      <h2 className="black-70 f6 mb1">{title}</h2>
      <p className="f6 mb0 black-40 lh-title">
        {body.length > 96 ? `${body.substr(0, 96)}...` : body}
      </p>
    </div>
  );
};

Note.propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const mapState = (state, ownProps) => ({
  active: state.notes.activeNote === ownProps.id,
});

const mapDispatch = (dispatch) => ({
  handleClick: (id) => dispatch(changeActiveNote(id)),
});

export default connect(mapState, mapDispatch)(Note);
