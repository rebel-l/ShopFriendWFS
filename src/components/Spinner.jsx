import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import styles from "./Spinner.scss";

const

    /**
     * Delay rendering of the spinner to avoid flickering on fast XHR requests.
     *
     * @type {number}
     */
    delay = 300,
    label = "Spinner...",
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

    shouldComponentUpdate (nextProps, nextState) {
        const
            { spinner } = this.props,
            { style } = this.state;

        return spinner !== nextProps.spinner || style !== nextState.style;
    }

    componentDidUpdate () {
        const
            { spinner } = this.props,
            self = this;

        if (spinner === false) {
            clearTimeout(this.timer);

            return;
        }

        this.timer = setTimeout(() => {
            self.show();
        }, delay);
    }

    /**
     * Make the spinner visible.
     */
    show () {
        this.setState({ "style": styles.spinner });
    }

    render () {
        const
            { spinner } = this.props,
            { style } = this.state;


        if (spinner === false) {
            return null;
        }

        return (
            <div className={style}>
                <div>
                    {label}
                </div>
            </div>
        );
    }
}

Spinner.propTypes = { "spinner": PropTypes.bool.isRequired };

export default connect(mapStateToProps)(Spinner);
