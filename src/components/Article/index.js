import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import { CommentList, Loader, LocolizedText } from '../';
import { deleteArticle, loadArticle } from '../../AC';

import './style.css';

class Article extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    // from connect
    article: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string
    }),
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  };

  state = {
    updateIndex: 0
  };

  getBody = () => {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    if (article.loading) return <Loader />;
    return (
      <section>
        {article.text}
        <button
          onClick={() =>
            this.setState({ updateIndex: this.state.updateIndex + 1 })
          }
        >
          update
        </button>
        <CommentList
          article={article}
          ref={this.setCommentRef}
          key={this.state.updateIndex}
        />
      </section>
    );
  };

  setContainerRef = (ref) => {
    this.container = ref;
    //        console.log('---', ref);
  };

  setCommentRef = (ref) => {
    //        console.log('---', ref);
  };

  /* shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen !== this.props.isOpen;
    };*/

  handleDelete = () => {
    const { deleteArticle, article } = this.props;
    deleteArticle(article.id);
  };

  componentDidMount() {
    const { loadArticle, article, id } = this.props;
    if (!article || (!article.text && !article.loading)) loadArticle(id);
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    if (!article) return null;

    return (
      <div ref={this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
        <button onClick={this.handleDelete}>
          <LocolizedText>delete me</LocolizedText>
        </button>
        <CSSTransitionGroup
          transitionName="article"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    article: state.articles.entities.get(ownProps.id)
  }),
  { deleteArticle, loadArticle },
  null,
  { pure: false }
)(Article);
