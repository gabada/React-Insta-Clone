import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

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

export default PostContainer;