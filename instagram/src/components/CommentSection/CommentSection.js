import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import PropTypes from 'prop-types';
import Dots from '../../img/more-horizontal.svg';
import moment from 'moment';

import './CommentSection.css';

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
                <span className="time">{moment(this.state.post.timestamp, 'MMMM Do YYYY, hh:mm:ss a').fromNow()}</span>
                <div>
                <form onSubmit={this.addNewComment}>
                <input className="addComment" onChange={this.handleChange} value={this.state.commentInput} type="text" placeholder="Add a comment..."/>
                <img src={Dots} alt="more" className="dots"/>
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