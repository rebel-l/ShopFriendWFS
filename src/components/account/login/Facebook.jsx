import { FacebookProvider, LoginButton } from "react-facebook";
import React, { Component } from "react";
import { addNotification } from "../../../redux/actions/notification";
import { connect } from "react-redux";
import { loginFacebook } from "../../../redux/actions/account/user";
import { newError } from "../../../model/notification";
import PropTypes from "prop-types";

const label = "Login via Facebook";

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

    shouldComponentUpdate () {
        return false;
    }

    /**
     * Handles the response of the external facebook component and sends the received token to auth backend.
     *
     * @param response
     */
    handleResponse (response) {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.loginFacebook(response.tokenDetail.accessToken);
    }

    /**
     * Handles the error of the external facebook component.
     *
     * @param error
     */
    handleError (error) {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.addNotification(newError(error.message));
    }

    render () {
        return (
            <FacebookProvider appId="1465803870260439">
                <LoginButton onCompleted={this.handleResponse}
                    onError={this.handleError}
                    scope="public_profile,email"
                >
                    <span>
                        {label}
                    </span>
                </LoginButton>
            </FacebookProvider>
        );
    }
}

Facebook.propTypes = {
    "addNotification": PropTypes.func.isRequired,
    "loginFacebook": PropTypes.func.isRequired,
};

export default connect(null, {
    addNotification,
    loginFacebook,
})(Facebook);
