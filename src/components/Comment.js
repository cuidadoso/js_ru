import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {commentSelectorFactory} from '../selectors';

function Comment({comment}) {
    return(
        <div>
            <p>{comment.text}</p> <b>by {comment.user}</b>
        </div>
    );
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    // from connect
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
};

const mapToProps = () => {
    const commentSelector = commentSelectorFactory();
    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        };
    };
};

export default connect(mapToProps)(Comment);
