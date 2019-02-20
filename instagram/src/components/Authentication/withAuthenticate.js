import React from 'react';

const withAuthenticate = PostsPage => LoginPage => props => {
            if (localStorage.getItem('loggedIn')==='true') {
                return <PostsPage />
            }
            return <LoginPage />;
        }

export default withAuthenticate;