import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Article} from './';
import {accordion} from '../decorators';
import {filtrateArticlesSelector} from '../selectors';
import {loadAllArticles} from '../AC'

class ArticleList extends Component {
    static propTypes = {
        // from connect
        articles: PropTypes.array.isRequired,
        loadAllArticles: PropTypes.func,
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

    componentDidMount() {
        this.props.loadAllArticles();
    }
}

export default connect((state) => {
    return {
        articles: filtrateArticlesSelector(state)
    }
}, {loadAllArticles})(accordion(ArticleList));
