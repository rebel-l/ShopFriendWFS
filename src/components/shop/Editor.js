'use strict';

import React, {Component} from 'react';
import styles from './Editor.scss';

import {connect} from 'react-redux';
import {editItem} from '../../redux/actions/shop/list/item';
import {addItem, updateItem} from '../../redux/actions/shop/editor';

const mapStateToProps = state => {
    return state.shopEditor;
}

/**
 * Editor is the UI component to adds or edit items of the shopping list.
 */
class Editor extends Component {
    constructor(props) {
        super(props);

        // init state
        this.state = {
            id: null,
            input: ''
        };

        // register event handler
        this.handleItem = this.handleItem.bind(this);
        this.handleKey = this.handleKey.bind(this);
    }

    /**
     * updateInput handles the changes in the input tag.
     *
     * @param input
     * @param id
     */
    updateInput(input, id) {
        this.setState({id: id, input: input});
    }

    /**
     * handleItem adds the items entered by the user in the input tag or updates an item in the shopping list.
     */
    handleItem() {
        let input = this.state.input.trim();
        if (input === '') {
            this.resetInput();
            return;
        }

        if (this.state.id != null) {
            this.props.updateItem(this.state.id, input);
        } else {
            this.props.addItem(input);
        }

        this.props.editItem(null);

        this.resetInput();
    }

    /**
     * resetInput resets the input tag to its initial (empty) values.
     */
    resetInput() {
        this.setState({id: null});
        this.setState({input: ''});
    }

    /**
     * handleKey delegates the user input to handleItem() by pressing a specific key.
     *
     * @param e
     */
    handleKey(e) {
        if (e.keyCode === 13) {
            this.handleItem();
        }
    }

    render() {
        let input = this.state.input
        let id = this.state.id;

        if (!input && this.props.name) {
            id = this.props.id;
            input = this.props.toString()
        }

        return (
            <div className={styles.editor}>
                <input
                    className={styles.input}
                    onChange={e => this.updateInput(e.target.value, id)}
                    onKeyDown={this.handleKey}
                    value={input}/>
                <button className={styles.button} onClick={this.handleItem}>+</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, {addItem, editItem, updateItem})(Editor);
