import React, { Component } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import axios from "axios";

class Facebook extends Component {
    handleResponse(response) {
        console.log(response);
        let data = {
            'accessToken': response.tokenDetail.accessToken
        }
        axios.put('https://auth.shopfriend.test/public/facebook/login', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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
