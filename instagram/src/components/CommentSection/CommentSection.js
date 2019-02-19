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
            post: props.post
        }
    }

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
                <input className="addComment" type="text" placeholder="Add a comment..."/>
                <img src={Dots} alt="more" className="dots"/>
                </div>
            </>
        );
    }
};

CommentSection.propTypes = {
    comments: PropTypes.array
};

export default CommentSection;