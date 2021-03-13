import { addItem, updateItem } from "../../redux/actions/shop/editor";

import React, { Component } from "react";
import { connect } from "react-redux";

import { editItem } from "../../redux/actions/shop/list/item";
import isEmpty from "../../libs/object/empty";

import PropTypes from "prop-types";

import styles from "./Editor.scss";

const
    keyboardEnter = 13,
    label = "+",
    mapStateToProps = (state) => ({ "item": state.shopEditor });

/**
 * Editor is the UI component to adds or edit items of the shopping list.
 */
class Editor extends Component {
    constructor (props) {
        super(props);

        // Init state
        this.state = { "input": "" };

        // Register event handler
        this.handleItem = this.handleItem.bind(this);
        this.handleKey = this.handleKey.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    shouldComponentUpdate (nextProps, nextState) {
        const { input } = this.state,
            { item } = this.props;

        if (nextState.input !== input) {
            return true;
        }

        if (isEmpty(nextProps.item) !== isEmpty(item)) {
            return true;
        }

        return !isEmpty(nextProps.item) && !isEmpty(item) && nextProps.item.toString() !== item.toString();
    }

    /**
     * HandleInput handles the changes in the input tag.
     *
     * @param e
     */
    handleInput (e) {
        this.setState({ "input": e.target.value });
    }

    /**
     * HandleItem adds the items entered by the user in the input tag or updates an item in the shopping list.
     */
    handleItem () {
        const { item } = this.props;
        let { input } = this.state;

        input = input.trim();

        if (input === "") {
            this.resetInput();

            return;
        }

        if (isEmpty(item)) {
            // eslint-disable-next-line react/destructuring-assignment
            this.props.addItem(input);
        } else {
            // eslint-disable-next-line react/destructuring-assignment
            this.props.updateItem(item.id, input);
        }

        // eslint-disable-next-line react/destructuring-assignment
        this.props.editItem(null);

        this.resetInput();
    }

    /**
     * ResetInput resets the input tag to its initial (empty) values.
     */
    resetInput () {
        this.setState({ "input": "" });
    }

    /**
     * HandleKey delegates the user input to handleItem() by pressing a specific key.
     *
     * @param e
     */
    handleKey (e) {
        if (e.keyCode === keyboardEnter) {
            this.handleItem();
        }
    }

    render () {
        const { item } = this.props;
        let { input } = this.state;

        if (!input && !isEmpty(item)) {
            input = item.toString();
        }

        return (
            <div className={styles.editor}>
                <input
                    className={styles.input}
                    onChange={this.handleInput}
                    onKeyDown={this.handleKey}
                    value={input}
                />
                <button className={styles.button}
                    onClick={this.handleItem}
                >
                    {label}
                </button>
            </div>
        );
    }
}

Editor.propTypes = {
    "addItem": PropTypes.func.isRequired,
    "editItem": PropTypes.func.isRequired,
    "item": PropTypes.object.isRequired,
    "updateItem": PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
    addItem,
    editItem,
    updateItem,
})(Editor);
