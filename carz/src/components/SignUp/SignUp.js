import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AppNavbar from '../AppNavbar/AppNavbar';
import Register from '../Register/register';

class SignUp extends Component {
    render(){
        return (
            <div>
                <AppNavbar />
                <h1>Sign up form goes here</h1>
                <Register />
            </div>
        )
    };
};

export default SignUp;

