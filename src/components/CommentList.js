import React from 'react';

import {Comment, CommentForm} from './';
import {toggleOpen} from '../decorators';
import PropTypes from "prop-types";

function CommentList ({comments = [], articleId, isOpen, toggleOpen}) {
        const buttonText = isOpen ? 'hide comments' : 'show comments';
        return (
            <div>
                <button onClick={toggleOpen}>
                    {buttonText}
                </button>
                {getBody({comments, isOpen, articleId})}
            </div>
        );
}

function getBody({comments, isOpen, articleId}) {
    if(!isOpen) return null;
    if(!comments.length) {
        return <p>No comments yet</p>;
    }
    return <div>
        <ul>
            {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
        </ul>
        <CommentForm articleId = {articleId}/>
    </div>;
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired,
    articleId: PropTypes.string.isRequired
};

export default toggleOpen(CommentList);
