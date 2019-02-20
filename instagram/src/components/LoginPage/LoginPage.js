import React, { Component }  from 'react';
import { CardTitle, Form, Input, Button, FormGroup } from 'reactstrap';

import './LoginPage.css';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            loggedIn: false
        }
    }

    componentDidMount() {
        if (localStorage.getItem('loggedIn')==='true') {
            this.setState({loggedIn: !this.state.loggedIn})
        }
        localStorage.setItem('loggedIn', this.state.loggedIn);
    }

    signIn = e => {
        e.preventDefault();
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        localStorage.setItem('loggedIn', !this.state.loggedIn);
        window.location.reload();
    }

    handleChanges = e => {this.setState({ [e.target.name]: e.target.value});}


    render() {
        return (
            <>
                <Form className="loginForm">
                <CardTitle>Sign In</CardTitle>
                <FormGroup>
                <Input
                    type='text'
                    value={this.state.username}
                    onChange={this.handleChanges}
                    name="username"
                    placeholder="username"
                />
                </FormGroup>
                <FormGroup>
                <Input
                    type='text'
                    value={this.state.password}
                    onChange={this.handleChanges}
                    name="password"
                    placeholder="password"
                />
                </FormGroup>
                <FormGroup>
                <Button onClick={this.signIn}>Sign In</Button>
                </FormGroup>
                </Form>
            </>
        )
    }
}

export default LoginPage;