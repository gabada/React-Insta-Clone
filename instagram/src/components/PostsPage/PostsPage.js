import React, { Component } from 'react';
import './PostsPage.css';
import dummyData from '../../dummy-data';
import Header from '../Header/Header';
import PostContainer from '../PostContainer/PostContainer';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
      posts: [],
      filteredPosts: []
    }
}

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  addLike = imageUrl => {
    let newPosts = [...this.state.posts];
    let filteredIndex = this.state.posts.findIndex(post => imageUrl === post.imageUrl)
    newPosts[filteredIndex].likes += 1
    this.setState({
      posts: newPosts
    })
  }

  searchPost = e => {
    let filteredPosts = this.state.posts.filter(post => post.username.includes(e.target.value));
      this.setState({
        filteredPosts: filteredPosts
    })
  }

  render() {
    return (
      <div className="PostsPage">
      <Header searchPost={this.searchPost} />
      <PostContainer posts={this.state.filteredPosts.length > 0
        ? this.state.filteredPosts
        : this.state.posts}
        addLike={this.addLike}
      />
      </div>
    );
  }
}

export default PostsPage;