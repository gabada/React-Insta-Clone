import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentUser = styled.span`
    font-weight: 700;
    margin-left: 10px;
`;

const Comment = props => {
    return (
        <>
            <div className="comment">
                <CommentUser>{props.username}</CommentUser>
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