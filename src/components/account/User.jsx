import React, { Component } from "react";
import { connect } from "react-redux";

import Facebook from "./login/Facebook.jsx";
import isEmpty from "../../libs/object/empty";
import { logout } from "../../redux/actions/account/user";

import PropTypes from "prop-types";

const
    label = "logout",
    mapStateToProps = (state) => ({ "user": state.accountUser });

class User extends Component {
    constructor (props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    shouldComponentUpdate (nextProps) {
        const { user } = this.props;

        return user.FirstName !== nextProps.user.FirstName;
    }

    handleLogout () {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.logout();
    }

    render () {
        const { user } = this.props;

        // eslint-disable-next-line one-var
        const greetings = `Hello ${user.FirstName}`;

        return (
            <div>
                {
                    isEmpty(user) === false ?
                        <div>
                            <h1>
                                {greetings}
                            </h1>
                            <button onClick={this.handleLogout}>
                                {label}
                            </button>
                        </div> :
                        <Facebook />
                }
            </div>
        );
    }
}

User.propTypes = {
    "logout": PropTypes.func.isRequired,
    "user": PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {
    logout,
})(User);
