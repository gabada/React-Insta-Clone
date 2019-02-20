import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsPage/PostsPage';
import withAuthenticate from './components/Authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends Component {

  render() {
    return (
      <div className="App">
      <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;