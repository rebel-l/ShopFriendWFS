import React, { Component } from 'react';
import { connect } from 'react-redux';
import IsEmpty from "../../libs/object/empty";

const mapStateToProps = (state) => {
    return {
        user: state.accountUser
    };
}

class User extends Component {
    render() {
        return (
            <div>
                {
                    IsEmpty(this.props.user) === false ?
                        <h1>Hello {this.props.user.first_name}</h1>
                        : ''
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(User);
