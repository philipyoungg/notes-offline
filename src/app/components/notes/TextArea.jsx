import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { updateNote } from './NoteAction';

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = { body: this.props.value };
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ body: nextProps.value });
  }

  onChange(e) {
    const { id, dispatch } = this.props;
    this.setState({ body: e.target.value });
    dispatch(updateNote(id, e.target.value));
  }

  render() {
    return (
      <textarea
        className="w-100 h-100 b--transparent input-reset db black-80 lh-copy"
        cols="10"
        rows="30"
        value={this.state.body}
        onChange={this.onChange}
      />
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(TextArea);
