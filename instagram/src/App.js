import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostsPage/PostsPage';
import withAuthenticate from './components/Authentication/withAuthenticate';
import LoginPage from './components/LoginPage/LoginPage';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

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