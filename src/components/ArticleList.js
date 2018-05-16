import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Article} from './';
import {accordion} from '../decorators';

class ArticleList extends Component {
    static propTypes = {
        // from connect
        articles: PropTypes.array.isRequired,
        // from accordion
        openItemId: PropTypes.string,
        toggleOpen: PropTypes.func.isRequired
    };

    render() {
        const {articles, openItemId, toggleOpen} = this.props;
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
    };
}

export default connect(({articles, filters}) => {
    const {selection, dateRange: {from, to}} = filters;
    const filteredArticles = articles.filter(article => {
        const published = Date.parse(article.date);
        return (!selection.length || selection.includes(article.id)) &&
            (!from || !to || (published > from && published < to));
    });
    return {
        articles: filteredArticles
    }
})(accordion(ArticleList));
