import React from 'react';
import PropTypes from 'prop-types';

import {Article} from './';
import {toggleAccordion} from '../decorators';

function ArticleList({articles = [], openArticleId, toggleOpen}) {
    const articleElements = articles.map(article => <li key={article.id}>
        <Article article = {article}
                 isOpen = {article.id === openArticleId}
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
    openArticleId: PropTypes.string.isRequired,
    toggleOpen: PropTypes.func.isRequired
};

export default toggleAccordion(ArticleList);
