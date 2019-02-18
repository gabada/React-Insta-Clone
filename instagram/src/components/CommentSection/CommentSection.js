import React from 'react';

const CommentSection = props => {
    return (
        <>
            {props.comments.map((comment, index) => (
            <div key={index}>
                <div className="commentUserName">
                    {comment.username}
                </div>
                <div className="commentText">
                    {comment.text}
                </div>
            </div>
            ))}
        </>
    );
};

export default CommentSection;