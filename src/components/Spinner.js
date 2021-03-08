import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Spinner.scss";

/**
 * Delay rendering of the spinner to avoid flickering on fast XHR requests.
 *
 * @type {number}
 */
const delay = 300,
    mapStateToProps = (state) => ({ "spinner": state.spinner });

/**
 * Spinner component as overlay on long running processes / XHR requests.
 */
class Spinner extends Component {
    constructor (props) {
        super(props);

        // Init state
        this.state = { "style": styles.hidden };

        // Register event handler
        this.show = this.show.bind(this);

        this.timer = null;
    }

    componentDidUpdate () {
        if (this.props.spinner === false) {
            clearTimeout(this.timer);

            return;
        }

        const that = this;

        this.timer = setTimeout(() => {
            that.show();
        }, delay);
    }

    /**
     * Make the spinner visible.
     */
    show () {
        this.setState({ "style": styles.spinner });
    }

    render () {
        if (this.props.spinner === false) {
            return null;
        }

        return (
            <div className={this.state.style}>
                <div>
                    Spinner...
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Spinner);
