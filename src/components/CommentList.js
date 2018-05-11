import React, {Component} from 'react';

import {Comment} from './';
import {toggleOpen} from '../decorators';

class CommentList extends Component {
    static defaultProps = {
        comments: []
    };

    getBody = () => {
        const {comments, isOpen} = this.props;
        if(!isOpen) return null;
        if(!comments.length) {
            return <p>No comments yet</p>;
        }
        return <ul>
            {comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)}
        </ul>;
    };

    render() {
        const {isOpen, toggleOpen} = this.props;
        const buttonText = isOpen ? 'hide comments' : 'show comments';
        return (
            <div>
                <button onClick={toggleOpen}>
                    {buttonText}
                </button>
                {this.getBody()}
            </div>
        );
    }
}

export default toggleOpen(CommentList);
