import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Notification.scss";

import { ERROR } from "../model/notification";
import { deleteNotifications } from "../redux/actions/notification";

const mapStateToProps = (state) => ({ "notifications": state.notification });

/**
 * Notification is the UI component to display notifications to the user.
 */
class Notification extends Component {
    constructor (props) {
        super(props);

        // Register event handler
        this.handleClose = this.handleClose.bind(this);
    }

    /**
     * Closes the notifications by deleting it from the redux store.
     */
    handleClose () {
        this.props.deleteNotifications();
    }

    render () {
        if (this.props.notifications.length === 0) {
            return "";
        }

        return (
            <div className={styles.notification}>
                {
                    this.props.notifications.map((item, index) => {
                        const style = item.type === ERROR ? styles.error : "";

                        return (
                            <div className={style}
                                id={index}
                            >
                                {item.message}
                            </div>
                        );
                    })
                }
                <div className={styles.last}>
                    <button onClick={this.handleClose}>
                        close
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, { deleteNotifications })(Notification);
