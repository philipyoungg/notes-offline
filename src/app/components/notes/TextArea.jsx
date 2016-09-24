import React, { PropTypes, Component } from 'react';

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: props.value };
  }

  onChange(e) {
    this.setState({ inputValue: e.target.value }).bind(this);
  }

  render() {
    return (
      <textarea
        className="w-100 h-100 b--transparent input-reset db black-80 lh-copy"
        cols="10"
        rows="10"
        value={this.state.inputValue}
        onChange={this.onChange}
      />
    );
  }
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
};

export default TextArea;
