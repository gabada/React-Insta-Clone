import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';
import Dots from '../../img/more-horizontal.svg';
import moment from 'moment';
import styled from 'styled-components';

const Time = styled.span`
    color: gray;
    margin-bottom: 10px;
    border-bottom: 1px lightgray solid;
    padding-bottom: 10px;
    width: 95%;
    margin-left: 10px;
`;

const AddComment = styled.input`
    border: none;
    margin-left: 10px;
    width: 90%;
`;

const DotsImg = styled.img`
    margin-left: 10px;
`;

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            post: props.post,
            commentInput: ""
        }
    }

    handleChange = e => {
        this.setState({ commentInput: e.target.value });
    }

    addNewComment = e =>  {
        e.preventDefault();
        const newComment = {
            text: this.state.commentInput,
            username: "Troll"
        }
        this.setState({
            comments: [...this.state.comments, newComment],
            commentInput: ''
        })
    };

    render() {
        return (
            <>
                {this.state.comments.map((comment, index) => (
                <div key={index}>
                    <Comment username={comment.username} text={comment.text} />
                </div>
                ))}
                <Time>{moment(this.state.post.timestamp, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}</Time>
                <div>
                <form onSubmit={this.addNewComment}>
                <AddComment onChange={this.handleChange} value={this.state.commentInput} type="text" placeholder="Add a comment..."/>
                <DotsImg src={Dots} alt="more" className="dots"/>
                </form>
                </div>
            </>
        );
    }
};

CommentSection.propTypes = {
    comments: PropTypes.array
};

export default CommentSection;