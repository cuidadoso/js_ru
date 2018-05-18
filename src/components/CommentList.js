import React from 'react';

import {Comment, CommentForm} from './';
import {toggleOpen} from '../decorators';
import PropTypes from "prop-types";

function CommentList ({article, isOpen, toggleOpen}) {
        const buttonText = isOpen ? 'hide comments' : 'show comments';
        return (
            <div>
                <button onClick={toggleOpen}>
                    {buttonText}
                </button>
                {getBody({article, isOpen})}
            </div>
        );
}

function getBody({article: {comments = [], id}, isOpen}) {
    if(!isOpen) return null;
    if(!comments.length) {
        return <p>No comments yet</p>;
    }
    return <div>
        <ul>
            {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
        </ul>
        <CommentForm articleId = {id}/>
    </div>;
}

CommentList.propTypes = {
    article: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired,
};

export default toggleOpen(CommentList);
