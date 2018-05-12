import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {ArticleChart, ArticleList, UserForm} from './';

class App extends  Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <UserForm/>
                <ArticleList articles = { this.props.articles} />
                <ArticleChart articles = { this.props.articles} />
            </div>
        );
    }
}

export default App;
