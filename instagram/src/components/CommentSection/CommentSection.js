import React from 'react';
import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';
import Dots from '../../img/more-horizontal.svg';

import './CommentSection.css';

const CommentSection = props => {
    return (
        <>
            {props.comments.map((comment, index) => (
            <div key={index}>
                <Comment username={comment.username} text={comment.text} />
            </div>
            ))}
            <span className="time">{props.timestamp}</span>
            <div>
            <input className="addComment" type="text" placeholder="Add a comment..."/>
            <img src={Dots} alt="more" className="dots"/>
            </div>
        </>
    );
};

CommentSection.propTypes = {
    comments: PropTypes.array
};


export default CommentSection;