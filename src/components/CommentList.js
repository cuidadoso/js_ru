import React, {Component} from 'react';
import {Comment} from './';

export default class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    state = {
        isOpen: false
    };

    toggleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    getBody = () => {
        if(!this.state.isOpen) return null;
        const {comments} = this.props;
        if(!comments.length) {
            return <p>No comments yet</p>;
        }
        return <ul>
            {comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)}
        </ul>;
    };

    render() {
        const {isOpen} = this.state;
        const buttonText = isOpen ? 'hide comments' : 'show comments';
        return (
            <div>
                <button onClick={this.toggleClick}>
                    {buttonText}
                </button>
                {this.getBody()}
            </div>
        );
    }
}
