import React from 'react';
import PropTypes from 'prop-types';

import {Article} from './';
import {accordion} from '../decorators';

function ArticleList({articles = [], openItemId, toggleOpen}) {
    const articleElements = articles.map(article => <li key={article.id}>
        <Article article = {article}
                 isOpen = {article.id === openItemId}
                 toggleOpen = {toggleOpen(article.id)}
        />
    </li>);
    return(
        <ul>
            {articleElements}
        </ul>
    );
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    // from accordion decorator
    openItemId: PropTypes.string,
    toggleOpen: PropTypes.func.isRequired
};

export default accordion(ArticleList);
