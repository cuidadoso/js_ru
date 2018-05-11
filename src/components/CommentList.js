import React from 'react';
import {Comment} from './';

export default function CommentList({comments}){
    let commentElements;
    if(comments) {
        commentElements = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>);
    } else {
        commentElements = [];
    }

    return (
        <ul>
            {commentElements}
        </ul>
    );
}
