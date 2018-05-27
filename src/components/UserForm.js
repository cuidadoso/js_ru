import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  handleUserChange = (ev) => {
    if (ev.target.value > 10) return;
    this.props.onChange(ev.target.value);
  };

  render() {
    return (
      <div>
        Name:{' '}
        <input
          type="text"
          value={this.props.value}
          onChange={this.handleUserChange}
        />
      </div>
    );
  }
}

export default UserForm;
