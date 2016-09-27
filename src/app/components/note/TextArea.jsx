import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';

class TextArea extends Component {
  componentDidMount() {
    this.node.focus();
  }
  componentWillReceiveProps() {
    this.node.focus();
  }
  render() {
    const { id, body, handleBody } = this.props;
    return (
      <textarea
        className="input-reset w-100 h-100 bw0 db black-80 lh-copy"
        placeholder="Enter new note..."
        cols="10"
        rows="30"
        ref={node => { this.node = node; }}
        value={body}
        onChange={(input) => { handleBody(id, input); }}
      />
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  handleBody: PropTypes.func.isRequired,
};

export default TextArea;
