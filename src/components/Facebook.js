import React, { Component } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';

class Facebook extends Component {
    handleResponse(response) {
        console.log(response);
    }

    handleError (error) {
        console.log(error);
    }

    render() {
        return (
            <FacebookProvider appId="1465803870260439">
                <LoginButton scope="public_profile,email" onCompleted={this.handleResponse} onError={this.handleError}>
                    <span>Login via Facebook</span>
                </LoginButton>
            </FacebookProvider>
        );
    }
}

export default Facebook;
