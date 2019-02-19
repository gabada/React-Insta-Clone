import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import { Card, CardImg } from 'reactstrap';
import Heart from '../../img/heart.svg';
import CommentImg from '../../img/message.svg';

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
                <div>
                    <img src={ Heart } onClick={() => props.addLike(post.imageUrl)} alt="like" className="heart"/>
                    <img src={ CommentImg } alt="comment" className="commentImg"/> 
                </div>
                <span className="likeNumber">{post.likes} Likes</span>
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