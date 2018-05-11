import React from 'react';
import {Comment} from './';

export default function CommentList({comments}){
    if(comments) {
        return <ul>
            {comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)}
        </ul>;
    } else {
        return <p>No comments yet</p>;
    }
}
