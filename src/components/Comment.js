import React from 'react';

export default function Comment({comment}) {
    return(
        <div>
            <h4>{comment.user}</h4>
            <section>{comment.text}</section>
        </div>
    );
}
