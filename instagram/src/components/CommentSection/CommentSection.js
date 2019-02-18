import React from 'react';
import Comment from '../Comment/Comment';

const CommentSection = props => {
    return (
        <>
            {props.comments.map((comment, index) => (
            <div key={index}>
                <Comment username={comment.username} text={comment.text} />
            </div>
            ))}
            <input type="text" placeholder="Add a comment..."/>
        </>
    );
};

export default CommentSection;