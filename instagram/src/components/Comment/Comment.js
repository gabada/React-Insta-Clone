import React from 'react';

const Comment = props => {
    return (
        <>
            <div className="comment">
                <span>{props.username}</span>
                {' ' + props.text}
            </div>
        </>
    );
};

export default Comment;
