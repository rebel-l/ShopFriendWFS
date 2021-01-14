'use strict';

import React, {Component} from 'react';
import styles from './Item.scss';

import {connect} from 'react-redux';
import {editItem} from '../../../redux/actions/shop/editor';
import {removeItem} from '../../../redux/actions/shop/list';

/**
 * cancelTimeout is the time the user can abort the deactivation of an item.
 *
 * @type {number}
 */
const cancelTimeout = 2000; // ms

/**
 * progressInterval is the interval to update the progress bar once the user deactivates an item.
 *
 * @type {number}
 */
const progressInterval = 10; // ms

/**
 * Item is the UI component for one item in the shopping list.
 */
class Item extends Component {
    constructor(props) {
        super(props);

        // init attributes
        this.item = props.item;
        this.timer = null;

        // init state
        this.state = {
            progress: 0 + '%',
            active: true // TODO: think of using it from item itself?
        };

        // register event handler
        this.handleActivate = this.handleActivate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    /**
     * handleActivate deals with de-/ activating an item by user. It steers the progress bar until it times out or the
     * user cancels the deactivation.
     * Activation the item happens immediately.
     */
    handleActivate() {
        if (this.isActive() && this.timer === null) {
            this.deactivate();
            let iterations = cancelTimeout / progressInterval;
            let step = 100 / iterations;
            let counter = 0;
            let self = this;
            this.timer = setInterval(function () {
                counter++;
                let progress = counter * step;

                if (counter < iterations) {
                    self.setProgress(progress);
                } else {
                    // we have timed out, item is deactivated
                    self.resetTimer();
                    console.log('timed out');
                }
            }, progressInterval);
        } else {
            // deactivating item was canceled by user
            this.activate();
            this.resetTimer();
        }
    }

    /**
     * handleEdit loads the item into the Editor for change by user.
     */
    handleEdit() {
        this.props.editItem(this.item);
    }

    /**
     * handleDelete removes the item from the shopping list.
     *
     * @param id {number|string}
     */
    handleDelete(id) {
        this.props.removeItem(id);
    }

    /**
     * resetTimer resets the timer and progress bar.
     */
    resetTimer() {
        this.setProgress(0);
        clearInterval(this.timer);
        this.timer = null;
    }

    /**
     * setProgress is used to animate the progress bar.
     *
     * @param value {number}
     */
    setProgress(value) {
        this.setState({progress: value + '%'});
    }

    /**
     * activate will activate the item.
     */
    activate() {
        this.setState({active: true});
    }

    /**
     * deactivate will deactivate the item.
     */
    deactivate() {
        this.setState({active: false});
    }

    /**
     * isActive returns the active state of item.
     *
     * @returns {boolean}
     */
    isActive() {
        return this.state.active;
    }

    render() {
        return (
            <div className={styles.outer}>
                <div className={styles.inner}>
                    <div className={styles.progressContainer} onClick={this.handleActivate}>
                        <div className={`${this.state.active ? styles.progress : styles.progressInactive}`}
                             style={{width: this.state.progress}}>
                            {this.item.toString()}
                        </div>
                    </div>
                    <button onClick={this.handleEdit}>edit</button>
                    <button onClick={() => this.handleDelete(this.item.id)}>delete</button>
                </div>
            </div>
        );
    }
}

export default connect(null, {removeItem, editItem})(Item);
