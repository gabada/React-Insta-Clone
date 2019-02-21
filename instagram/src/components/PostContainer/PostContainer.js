import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import { Card, CardImg } from 'reactstrap';
import Heart from '../../img/heart.svg';
import CommentImg from '../../img/message.svg';
import styled from 'styled-components';
import Username from '../../styles/Reusables/Username';

const LikeNumber = styled.span`
    font-weight: 700;
    margin-left: 10px;
`;

const Modal = styled.img`
    margin: 10px;
`;

const UserLogo = styled.img`
    border-radius: 50%;
    width: 50px;
    margin: 10px 0;
`;

const CardPost = styled(Card)`
    margin-bottom: 20px;
    padding-bottom: 20px;
`;

const PostContainer = props => {
    return (
        <>
        {props.posts.map((post) => (
            <CardPost key={post.imageUrl}>
                <div>
                <UserLogo src={post.thumbnailUrl} alt="user-logo"/>
                <Username weight>{post.username}</Username>
                </div>
                <CardImg src={post.imageUrl} alt="posted-pic"/>
                <div>
                    <Modal src={ Heart } onClick={() => props.addLike(post.imageUrl)} alt="like"/>
                    <Modal src={ CommentImg } alt="comment"/>
                </div>
                <LikeNumber>{post.likes} Likes</LikeNumber>
                <CommentSection post={post} comments={post.comments} timestamp={post.timestamp}/>
            </CardPost>
        ))}
        </>
    );
};

PostContainer.propTypes = {
    posts: PropTypes.array
};

export default PostContainer;