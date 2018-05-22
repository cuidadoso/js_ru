import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Comment, CommentForm } from './';
import { toggleOpen } from '../decorators';
import { loadArticleComments } from '../AC';
import { Loader } from './';

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired,
    // from connect
    loadArticleComments: PropTypes.func,
    // from toggleOpen
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
  };

  getBody = ({
    article: { comments = [], id, commentsLoading, commentsLoaded },
    isOpen
  }) => {
    if (!isOpen) return null;
    if (commentsLoading) return <Loader />;
    if (!commentsLoaded) return null;
    if (!comments.length) {
      return (
        <div>
          <p>No comments yet</p>
          <CommentForm articleId={id} />
        </div>
      );
    }
    return (
      <div>
        <ul>
          {comments.map((id) => (
            <li key={id}>
              <Comment id={id} />
            </li>
          ))}
        </ul>
        <CommentForm articleId={id} />
      </div>
    );
  };

  componentWillReceiveProps({ isOpen, loadArticleComments, article }) {
    if (
      !this.props.isOpen &&
      isOpen &&
      !article.commentsLoading &&
      !article.commentsLoaded
    ) {
      loadArticleComments(article.id);
    }
  }

  render() {
    const { isOpen, article, toggleOpen } = this.props;
    const buttonText = isOpen ? 'hide comments' : 'show comments';
    return (
      <div>
        <button onClick={toggleOpen}>{buttonText}</button>
        {this.getBody({ article, isOpen })}
      </div>
    );
  }
}

export default connect(null, { loadArticleComments })(toggleOpen(CommentList));
