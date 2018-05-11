import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {ArticleList, ArticleChart} from './';

export default class App extends  Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <ArticleList articles = { this.props.articles} />
                <ArticleChart articles = { this.props.articles} />
            </div>
        );
    }
}
