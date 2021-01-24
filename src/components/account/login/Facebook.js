import React, { Component } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import axios from "axios";

class Facebook extends Component {
    handleResponse(response) {
        // TODO: not part of UI component => move to model or redux store!
        console.log(response);
        let data = {
            'AccessToken': response.tokenDetail.accessToken
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
