import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { changeActiveNote, archiveThenChangeActiveNote } from "./noteAction";

const NoteItem = ({
  id,
  time,
  title,
  body,
  active,
  handleClick,
  handleDelete
}) => (
  <div
    onClick={() => handleClick(id)}
    className={`link relative pa3 db bb b--near-white pointer ${active ? "bg-near-white" : ""}`}
  >
    <div className="cf">
      <p className="fl f7 mb2 black-40">{time}</p>
      <p
        className="fr f7 mb2 black-30 underline"
        onClick={e => handleDelete(e, id)}
      >
        delete
      </p>
    </div> <h2 className="black-70 f6 mb1">{title}</h2>
    <p className="f6 mb0 black-40 lh-title">
      {body.length > 96 ? `${body.substr(0, 96)}...` : body}
    </p>
  </div>
);

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

const mapState = ({ activeNoteId }, ownProps) => ({
  active: activeNoteId === ownProps.id
});

const mapDispatch = dispatch => ({
  handleClick: id => dispatch(changeActiveNote(id)),
  handleDelete: (e, id) => {
    e.stopPropagation();
    dispatch(archiveThenChangeActiveNote(id));
  }
});

export default connect(mapState, mapDispatch)(NoteItem);
