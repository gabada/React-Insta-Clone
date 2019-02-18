import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

import './PostContainer.css'

const PostContainer = props => {
    return (
        <>
        {props.posts.map((post, index) => (
            <div key={index}>
                <CommentSection post={post} comments={post.comments}/>
            </div>
        ))}
        </>
    );
};

PostContainer.propTypes = {
    posts: PropTypes.array
};

export default PostContainer;