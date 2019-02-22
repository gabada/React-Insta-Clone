import React from 'react';
import PropTypes from 'prop-types';
import Username from '../../styles/Reusables/Username';

const Comment = props => {
    return (
        <>
            <div className="comment">
                <Username>{props.username}</Username>
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