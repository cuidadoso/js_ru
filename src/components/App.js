import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import {ArticleChart, ArticleList, UserForm} from './';

class App extends  Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selection: null
    };

    changeSelection = selection => {
        this.setState({
            selection
        });
    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <UserForm/>
                <Select options = {options}
                        value = {this.state.selection}
                        onChange = {this.changeSelection}
                        multi />
                <ArticleList articles = { this.props.articles} />
                <ArticleChart articles = { this.props.articles} />
            </div>
        );
    }
}

export default App;
