import React, { Component } from 'react';
import PostsPage from './components/PostsPage/PostsPage';
import withAuthenticate from './components/Authentication/withAuthenticate';
import LoginPage from './components/LoginPage/LoginPage';
import styled from 'styled-components';

const AppDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends Component {

  render() {
    return (
      <AppDiv>
      <ComponentFromWithAuthenticate />
      </AppDiv>
    );
  }
}

export default App;