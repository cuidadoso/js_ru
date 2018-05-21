import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Article, Loader } from './';
import { accordion } from '../decorators';
import { filtrateArticlesSelector } from '../selectors';
import { loadAllArticles, loadAllComments } from '../AC';

class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.array.isRequired,
    loadAllArticles: PropTypes.func,
    loadAllComments: PropTypes.func,
    // from accordion
    openItemId: PropTypes.string,
    toggleOpen: PropTypes.func.isRequired
  };

  render() {
    const { articles, openItemId, toggleOpen, loading } = this.props;
    if (loading) return <Loader />;
    const articleElements = articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === openItemId}
          toggleOpen={toggleOpen(article.id)}
        />
      </li>
    ));
    return <ul>{articleElements}</ul>;
  }

  componentDidMount() {
    const { loaded, loading, loadAllArticles, loadAllComments } = this.props;
    if (!loaded || !loading) {
      loadAllArticles();
      loadAllComments();
    }
  }
}

export default connect(
  (state) => {
    return {
      articles: filtrateArticlesSelector(state),
      loading: state.articles.loading,
      loaded: state.articles.loaded
    };
  },
  { loadAllArticles, loadAllComments }
)(accordion(ArticleList));
