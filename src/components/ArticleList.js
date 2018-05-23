import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Loader } from './';
import { filtrateArticlesSelector } from '../selectors';
import { loadAllArticles } from '../AC';

class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.array.isRequired,
    loadAllArticles: PropTypes.func
  };

  render() {
    const { articles, loading } = this.props;
    if (loading) return <Loader />;
    const articleElements = articles.map((article) => (
      <li key={article.id}>
        <NavLink to={`/articles/${article.id}`} activeStyle={{ color: 'red' }}>
          {article.title}
        </NavLink>
      </li>
    ));
    return <ul>{articleElements}</ul>;
  }

  componentDidMount() {
    const { loaded, loading, loadAllArticles } = this.props;
    if (!loaded || !loading) loadAllArticles();
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
  { loadAllArticles }
)(ArticleList);
