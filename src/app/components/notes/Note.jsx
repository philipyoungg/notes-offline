import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const changeNote = (id) => ({
  type: 'CHANGE_ACTIVE_NOTE',
  id,
});

const Note = ({ id, time, title, body, active, dispatch }) => {
  const bg = active ? 'bg-near-white' : '';
  return (
    <div
      onClick={() => { dispatch(changeNote(id)); }}
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
  id: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapState = (state, ownProps) => ({
  active: state.notes.activeNote === ownProps.id,
});

export default connect(mapState)(Note);
