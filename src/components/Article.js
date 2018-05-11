import React, {Component} from 'react';

import {CommentList} from './';

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isCommentShow: false
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
        return <section>{article.text}</section>;
    };

    getComments() {
        if(!this.state.isCommentShow) return null;
        const {article} = this.props;
        return <CommentList comments = {article.comments}/>;
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
                <button onClick={this.toggleShowComments}>
                    {isCommentShow ? 'Hide comments' : 'Show comments'}
                </button>
                {this.getBody()}
                {this.getComments()}
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
