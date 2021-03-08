import React, { Component } from "react";
import styles from "./Item.scss";

import { connect } from "react-redux";
import { activateItem, deactivateItem, editItem, removeItem } from "../../../redux/actions/shop/list/item";

/**
 * CancelTimeout is the time the user can abort the deactivation of an item.
 *
 * @type {number}
 */
const cancelTimeout = 2000, // Ms

    /**
     * ProgressInterval is the interval to update the progress bar once the user deactivates an item.
     *
     * @type {number}
     */
    progressInterval = 10; // Ms

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
            "progress": `${0}%`,
            "active": true, // TODO: think of using it from item itself?
            "contextMenu": false,
        };

        // Register event handler
        this.handleActivate = this.handleActivate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSwipe = this.handleSwipe.bind(this);
    }

    /**
     * HandleActivate deals with de-/ activating an item by user. It steers the progress bar until it times out or the
     * user cancels the deactivation.
     * Activation the item happens immediately.
     *
     * @param id {number|string}
     */
    handleActivate (id) {
        if (this.isActive() && this.timer === null) {
            this.deactivate();

            // Delay re-rendering shopping list depending on user action
            const iterations = cancelTimeout / progressInterval,
                step = 100 / iterations;
            let counter = 0,
                self = this;

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
        this.props.editItem(this.item);
        this.setState({ "contextMenu": false });
    }

    /**
     * HandleDelete removes the item from the shopping list.
     *
     * @param id {number|string}
     */
    handleDelete (id) {
        this.props.removeItem(id);
    }

    /**
     * ResetTimer resets the timer and progress bar.
     */
    resetTimer () {
        this.setProgress(0);
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
        this.props.activateItem(id);
        this.setState({ "active": true });
        this.setState({ "contextMenu": false });
    }

    /**
     * Deactivate will deactivate the item.
     */
    deactivate () {
        this.setState({ "active": false });
        this.setState({ "contextMenu": false });
    }

    /**
     * IsActive returns the active state of item.
     *
     * @returns {boolean}
     */
    isActive () {
        return this.state.active;
    }

    /**
     * HandleSwipe opens the context menu as soon as an user swipes on an item.
     */
    handleSwipe () {
        this.setState({ "contextMenu": true });
    }

    render () {
        let containerStyle = styles.progressContainer,
            contentStyle = this.state.active ? styles.progress : styles.progressInactive,
            buttonStyle = "";

        if (this.state.contextMenu) {
            buttonStyle = styles.contextMenu;
            containerStyle += ` ${styles.contextMenu}`;
        }

        return (
            <div className={styles.item}>
                <div className={styles.inner}>
                    <div className={containerStyle}
                        onClick={() => this.handleActivate(this.item.id)}
                        onTouchMove={this.handleSwipe}
                    >
                        <div className={contentStyle}
                            style={{ "width": this.state.progress }}
                        >
                            {this.item.toString()}
                        </div>
                    </div>
                    <button className={buttonStyle}
                        onClick={this.handleEdit}
                    >
                        edit
                    </button>
                    <button className={buttonStyle}
                        onClick={() => this.handleDelete(this.item.id)}
                    >
                        delete
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(null, {
    removeItem,
    editItem,
    activateItem,
    deactivateItem,
})(Item);
