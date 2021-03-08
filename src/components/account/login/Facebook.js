import React, { Component } from "react";
import { FacebookProvider, LoginButton } from "react-facebook";

import { connect } from "react-redux";
import { loginFacebook } from "../../../redux/actions/account/user";

/**
 * Facebook is the UI component to make a login via facebook.
 */
class Facebook extends Component {
    constructor (props) {
        super(props);

        // Register event handler
        this.handleError = this.handleError.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }

    /**
     * Handles the response of the external facebook component and sends the received token to auth backend.
     *
     * @param response
     */
    handleResponse (response) {
        this.props.loginFacebook(response.tokenDetail.accessToken);
    }

    /**
     * Handles the error of the external facebook component.
     *
     * @param error
     */
    handleError (error) {
        console.log(error);
    }

    render () {
        return (
            <FacebookProvider appId="1465803870260439">
                <LoginButton onCompleted={this.handleResponse}
                    onError={this.handleError}
                    scope="public_profile,email"
                >
                    <span>
                        Login via Facebook
                    </span>
                </LoginButton>
            </FacebookProvider>
        );
    }
}

export default connect(null, { loginFacebook })(Facebook);
