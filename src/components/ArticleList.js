import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Article} from './';

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        openArticleId: null
    };

    toggleOpenArticle = openArticleId => ev =>{
        this.setState({
            openArticleId
        })
    };

    render() {
        const articleElements = this.props.articles.map(article => <li key={article.id}>
            <Article article = {article}
                     isOpen = {article.id === this.state.openArticleId}
                     toggleOpen = {this.toggleOpenArticle(article.id)}
            />
        </li>);
        return(
            <ul>
                {articleElements}
            </ul>
        );
    }
}

export default ArticleList;
