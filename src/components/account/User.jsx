import React, { Component } from "react";
import { connect } from "react-redux";

import isEmpty from "../../libs/object/empty";

import PropTypes from "prop-types";

const mapStateToProps = (state) => ({ "user": state.accountUser });

class User extends Component {
    shouldComponentUpdate (nextProps) {
        const { user } = this.props;

        return user.FirstName !== nextProps.user.FirstName;
    }

    render () {
        const { user } = this.props;

        // eslint-disable-next-line one-var
        const greetings = `Hello ${user.FirstName}`;

        return (
            <div>
                {
                    isEmpty(user) === false ?
                        <h1>
                            {greetings}
                        </h1> :
                        ""
                }
            </div>
        );
    }
}

User.propTypes = { "user": PropTypes.object.isRequired };

export default connect(mapStateToProps)(User);
