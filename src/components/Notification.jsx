import React, { Component } from "react";
import { connect } from "react-redux";

import { deleteNotifications } from "../redux/actions/notification";
import { ERROR } from "../model/notification";

import PropTypes from "prop-types";

import styles from "./Notification.scss";

const
    buttonLabelClose = "close",
    emptyNotifications = 0,
    mapStateToProps = (state) => ({ "notifications": state.notification });

/**
 * Notification is the UI component to display notifications to the user.
 */
class Notification extends Component {
    constructor (props) {
        super(props);

        // Register event handler
        this.handleClose = this.handleClose.bind(this);
    }

    shouldComponentUpdate (nextProps) {
        const { notifications } = this.props;

        if (notifications.length !== nextProps.notifications.length) {
            return true;
        }

        for (let i = 0; i < notifications.length; i++) {
            const current = notifications[i],
                next = nextProps[i];

            if (next.type !== current.type || next.message !== current.message) {
                return true;
            }
        }

        return false;
    }

    /**
     * Closes the notifications by deleting it from the redux store.
     */
    handleClose () {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.deleteNotifications();
    }

    render () {
        const { notifications } = this.props;

        if (notifications.length === emptyNotifications) {
            return "";
        }

        return (
            <div className={styles.notification}>
                {
                    notifications.map((item, index) => {
                        const style = item.type === ERROR ? styles.error : "";

                        return (
                            <div className={style}
                                id={index}
                                key={index}
                            >
                                {item.message}
                            </div>
                        );
                    })
                }
                <div className={styles.last}>
                    <button onClick={this.handleClose}>
                        {buttonLabelClose}
                    </button>
                </div>
            </div>
        );
    }
}

Notification.propTypes = {
    "deleteNotifications": PropTypes.func.isRequired,
    "notifications": PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { deleteNotifications })(Notification);
