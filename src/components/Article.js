import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {CommentList} from './';

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleClick = ev => {
        ev.preventDefault();
        console.log('--- React event: ', ev);
        console.log('--- Native event: ', ev.nativeEvent);
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    toggleShowComments = ev => {
        this.setState({
            isCommentShow: !this.state.isCommentShow
        });
    };

    getBody = () => {
        if(!this.state.isOpen) return null;
        const {article} = this.props;
        return <div>
            <section>{article.text}</section>
            <CommentList comments = {article.comments}/>
        </div>;
    };

    render() {
        const {article} = this.props;
        const {isOpen, isCommentShow} = this.state;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleClick}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        );
    };
}

/*export default function Article(props) {
    const {article} = props;
    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    );
}*/
