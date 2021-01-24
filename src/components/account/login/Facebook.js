'use strict';

import React, { Component } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';

import {connect} from 'react-redux';
import {loginFacebook} from "../../../redux/actions/account/login";

class Facebook extends Component {
    constructor(props) {
        super(props);

        // register event handler
        this.handleError = this.handleError.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }

    handleResponse(response) {
        this.props.loginFacebook(response.tokenDetail.accessToken);
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

export default connect(null, {loginFacebook})(Facebook);
