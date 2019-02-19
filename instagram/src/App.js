import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import Header from './components/Header/Header';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
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

  addLike = index => {
    let newPosts = [...this.state.posts];
    newPosts[index].likes += 1
    this.setState({
      posts: newPosts
    })
  }

  render() {
    return (
      <div className="App">
      <Header />
      <PostContainer posts={this.state.posts} addLike={this.addLike} />
      </div>
    );
  }
}

export default App;