import React from 'react';
import PropTypes from 'prop-types';

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


Comment.propTypes = {
    text: PropTypes.string,
    username: PropTypes.string
};

export default Comment;