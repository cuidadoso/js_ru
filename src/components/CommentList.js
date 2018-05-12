import React from 'react';

import {Comment} from './';
import {toggleOpen} from '../decorators';
import PropTypes from "prop-types";

function CommentList ({comments = [], isOpen, toggleOpen}) {
        const buttonText = isOpen ? 'hide comments' : 'show comments';
        return (
            <div>
                <button onClick={toggleOpen}>
                    {buttonText}
                </button>
                {getBody({comments, isOpen})}
            </div>
        );
}

function getBody({comments, isOpen}) {
    if(!isOpen) return null;
    if(!comments.length) {
        return <p>No comments yet</p>;
    }
    return <ul>
        {comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)}
    </ul>;
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired
};

export default toggleOpen(CommentList);
