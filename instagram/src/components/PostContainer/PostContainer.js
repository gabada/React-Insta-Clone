import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import { Card, CardImg } from 'reactstrap';

import './PostContainer.css'

const PostContainer = props => {
    return (
        <>
        {props.posts.map((post, index) => (
            <Card key={index} className="card">
                <div>
                <img src={post.thumbnailUrl} alt="user-logo" className="userLogo"/>
                <span className="username">{post.username}</span>
                </div>
                <CardImg src={post.imageUrl} alt="posted-pic"/>
                {post.likes}
                <CommentSection post={post} comments={post.comments} timestamp={post.timestamp}/>
            </Card>
        ))}
        </>
    );
};

PostContainer.propTypes = {
    posts: PropTypes.array
};

export default PostContainer;