import { addItem, updateItem } from "../../redux/actions/shop/editor";
import React, { Component } from "react";
import { connect } from "react-redux";
import { editItem } from "../../redux/actions/shop/list/item";
import styles from "./Editor.scss";

const
    keyboardEnter = 13,
    mapStateToProps = (state) => state.shopEditor;

/**
 * Editor is the UI component to adds or edit items of the shopping list.
 */
class Editor extends Component {
    constructor (props) {
        super(props);

        // Init state
        this.state = {
            "id": null,
            "input": "",
        };

        // Register event handler
        this.handleItem = this.handleItem.bind(this);
        this.handleKey = this.handleKey.bind(this);
    }

    /**
     * UpdateInput handles the changes in the input tag.
     *
     * @param input
     * @param id
     */
    updateInput (input, id) {
        this.setState({
            id,
            input,
        });
    }

    /**
     * HandleItem adds the items entered by the user in the input tag or updates an item in the shopping list.
     */
    handleItem () {
        const input = this.state.input.trim();

        if (input === "") {
            this.resetInput();

            return;
        }

        if (this.state.id !== null) {
            this.props.updateItem(this.state.id, input);
        } else {
            this.props.addItem(input);
        }

        this.props.editItem(null);

        this.resetInput();
    }

    /**
     * ResetInput resets the input tag to its initial (empty) values.
     */
    resetInput () {
        this.setState({ "id": null });
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
        let input = this.state.input,
            id = this.state.id;

        if (!input && this.props.name) {
            id = this.props.id;
            input = this.props.toString();
        }

        return (
            <div className={styles.editor}>
                <input
                    className={styles.input}
                    onChange={(e) => this.updateInput(e.target.value, id)}
                    onKeyDown={this.handleKey}
                    value={input}
                />
                <button className={styles.button}
                    onClick={this.handleItem}
                >
                    +
                </button>
            </div>
        );
    }
}

export default connect(mapStateToProps, {
    addItem,
    editItem,
    updateItem,
})(Editor);
