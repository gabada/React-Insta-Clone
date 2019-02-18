import React from 'react';
import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
        <>
            {props.comments.map((comment, index) => (
            <div key={index}>
                <Comment username={comment.username} text={comment.text} />
            </div>
            ))}
            {props.timestamp}
            <input type="text" placeholder="Add a comment..."/>
        </>
    );
};

CommentSection.propTypes = {
    comments: PropTypes.array
};


export default CommentSection;