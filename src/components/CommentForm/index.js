import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addComment } from '../../AC';

import './style.css';

const limits = {
  user: {
    min: 5,
    max: 15
  },
  text: {
    min: 20,
    max: 50
  }
};

class CommentForm extends Component {
  static propTypes = {
    articleId: PropTypes.string.isRequired,
    // from connect
    addComment: PropTypes.func.isRequired
  };

  state = {
    user: '',
    text: ''
  };

  handleChange = (type) => (ev) => {
    const { value } = ev.target;
    if (value.length > limits[type].max) return;
    this.setState({
      [type]: value
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.addComment(this.state);
    this.setState({
      user: '',
      text: ''
    });
  };

  getClassName = (type) =>
    this.state[type].length && this.state[type].length < limits[type].min
      ? 'form-input__error'
      : '';

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name:{' '}
        <input
          value={this.state.user}
          onChange={this.handleChange('user')}
          className={this.getClassName('user')}
        />
        Comment:{' '}
        <textarea
          value={this.state.text}
          onChange={this.handleChange('text')}
          className={this.getClassName('text')}
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default connect(null, (dispatch, ownProps) => ({
  addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
}))(CommentForm);
