import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {CommentList} from './';
import {toggleOpen} from '../decorators'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    };

    getBody = () => {
        const {article, isOpen} = this.props;
        if(!isOpen) return null;
        return <div>
            <section>{article.text}</section>
            <CommentList comments = {article.comments}/>
        </div>;
    };

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        );
    };
}

export default toggleOpen(Article);
