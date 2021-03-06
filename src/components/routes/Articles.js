import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Article, ArticleList } from '../';

class Articles extends Component {
  getIndex = ({ match }) => {
    if (!match) return <h2>Article page: </h2>;
    return <h2>Please select article</h2>;
  };

  getArticle = ({ match }) => {
    const { id } = match.params;
    return <Article id={id} isOpen key={id} />;
  };

  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/" children={this.getIndex} exact />
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    );
  }
}

export default Articles;
