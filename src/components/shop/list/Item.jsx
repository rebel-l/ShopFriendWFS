import { activateItem, deactivateItem, editItem, removeItem } from "../../../redux/actions/shop/list/item";

import React, { Component } from "react";
import { connect } from "react-redux";

import isEmpty from "../../../libs/object/empty";
import PropTypes from "prop-types";

import styles from "./Item.scss";

const

    /**
     * CancelTimeout is the time in milliseconds the user can abort the deactivation of an item.
     *
     * @type {number}
     */
    cancelTimeout = 2000,

    labelDelete = "delete",
    labelEdit = "edit",

    /**
     * ProgressInterval is the interval in milliseconds to update the progress bar once the user deactivates an item.
     *
     * @type {number}
     */
    progressInterval = 10,

    /**
     * The max value (percentage) of the progress bar.
     *
     * @type {number}
     */
    progressMaxValue = 100,

    /**
     * The min value (percentage) of the progress label.
     *
     * @type {number}
     */
    progressMinValue = 0;

/**
 * Item is the UI component for one item in the shopping list.
 */
class Item extends Component {
    constructor (props) {
        super(props);

        // Init attributes
        this.item = props.item;
        this.timer = null;

        // Init state
        this.state = {
            "active": this.item.active,
            "contextMenu": false,
            "progress": `${progressMinValue}%`,
        };

        // Register event handler
        this.handleActivate = this.handleActivate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSwipe = this.handleSwipe.bind(this);
    }

    shouldComponentUpdate (nextProps, nextState) {
        const { active, contextMenu, progress } = this.state;

        if (nextState.active !== active || nextState.contextMenu !== contextMenu || nextState.progress !== progress) {
            return true;
        }

        if (isEmpty(nextProps.item) !== isEmpty(this.item)) {
            return true;
        }

        return !isEmpty(nextProps.item) && !isEmpty(this.item) && nextProps.item.toString() !== this.item.toString();
    }

    /**
     * HandleActivate deals with de-/ activating an item by user. It steers the progress bar until it times out or the
     * user cancels the deactivation.
     * Activation the item happens immediately.
     */
    handleActivate () {
        const id = this.item.id;

        if (this.isActive() && this.timer === null) {
            this.deactivate(id);

            // Delay re-rendering shopping list depending on user action
            const iterations = cancelTimeout / progressInterval,
                self = this,
                step = progressMaxValue / iterations;
            let counter = 0;

            this.timer = setInterval(() => {
                counter++;
                const progress = counter * step;

                if (counter < iterations) {
                    self.setProgress(progress);
                } else {
                    // We have timed out, item is deactivated
                    self.resetTimer();
                    self.props.deactivateItem(id);
                }
            }, progressInterval);
        } else {
            // Deactivating item was canceled by user
            this.activate(id);
            this.resetTimer();
        }
    }

    /**
     * HandleEdit loads the item into the Editor for change by user.
     */
    handleEdit () {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.editItem(this.item);
        this.setState({ "contextMenu": false });
    }

    /**
     * HandleDelete removes the item from the shopping list.
     */
    handleDelete () {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.removeItem(this.item.id);
    }

    /**
     * ResetTimer resets the timer and progress bar.
     */
    resetTimer () {
        this.setProgress(progressMinValue);
        clearInterval(this.timer);
        this.timer = null;
    }

    /**
     * SetProgress is used to animate the progress bar.
     *
     * @param value {number}
     */
    setProgress (value) {
        this.setState({ "progress": `${value}%` });
    }

    /**
     * Activate will activate the item.
     *
     * @param id {number|string}
     */
    activate (id) {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.activateItem(id);
        this.setState({ "active": true });
        this.setState({ "contextMenu": false });
    }

    /**
     * Deactivate will deactivate the item.
     */
    deactivate () {
        // We only want to deactivate the component here, as the user might cancel the deactivation
        this.setState({ "active": false });
        this.setState({ "contextMenu": false });
    }

    /**
     * IsActive returns the active state of item.
     *
     * @returns {boolean}
     */
    isActive () {
        const { active } = this.state;

        return active;
    }

    /**
     * HandleSwipe opens the context menu as soon as an user swipes on an item.
     */
    handleSwipe () {
        this.setState({ "contextMenu": true });
    }

    render () {
        const { active, contextMenu, progress } = this.state,
            contentStyle = active ? styles.progress : styles.progressInactive;

        let buttonStyle = "",
            containerStyle = styles.progressContainer;

        if (contextMenu) {
            buttonStyle = styles.contextMenu;
            containerStyle += ` ${styles.contextMenu}`;
        }

        return (
            <div className={styles.item}>
                <div className={styles.inner}>
                    <div className={containerStyle}
                        onClick={this.handleActivate}
                        onTouchMove={this.handleSwipe}
                    >
                        <div className={contentStyle}
                            style={{ "width": progress }}
                        >
                            {this.item.toString()}
                        </div>
                    </div>
                    <button className={buttonStyle}
                        onClick={this.handleEdit}
                    >
                        {labelEdit}
                    </button>
                    <button className={buttonStyle}
                        onClick={this.handleDelete}
                    >
                        {labelDelete}
                    </button>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    "activateItem": PropTypes.func.isRequired,
    "editItem": PropTypes.func.isRequired,
    "item": PropTypes.object.isRequired,
    "removeItem": PropTypes.func.isRequired,
};

export default connect(null, {
    activateItem,
    deactivateItem,
    editItem,
    removeItem,
})(Item);
