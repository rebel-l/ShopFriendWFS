'use strict';

import React, {Component} from "react";
import styles from './AddItem.scss';

import {connect} from 'react-redux';
import {addListItem, editItem, updateListItem} from "../../../redux/actions/shop/list";
import {getEditItem} from "../../../redux/reducers/selectors";

const mapStateToProps = state => {
    return getEditItem(state);
}

class AddItem extends Component {
    constructor(props) {
        super(props);

        // init state
        this.state = {
            id: null,
            input: ''
        };

        // register event handler
        this.handleAddListItem = this.handleAddListItem.bind(this);
        this.handleKey = this.handleKey.bind(this);
    }

    updateInput(input, id) {
        this.setState({id: id, input: input});
    }

    handleAddListItem() {
        let input = this.state.input.trim();
        if (input === '') {
            this.resetInput();
            return;
        }

        if (this.state.id != null) {
            this.props.updateListItem(this.state.id, input);
        } else {
            this.props.addListItem(input);
        }

        this.props.editItem(null);

        this.resetInput();
    }

    resetInput() {
        this.setState({id: null});
        this.setState({input: ''});
    }

    handleKey(e) {
        if (e.keyCode === 13) {
            this.handleAddListItem();
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
            <div className={styles.addItem}>
                <input
                    className={styles.input}
                    onChange={e => this.updateInput(e.target.value, id)}
                    onKeyDown={this.handleKey}
                    value={input}/>
                <button className={styles.button} onClick={this.handleAddListItem}>add</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, {addListItem, editItem, updateListItem})(AddItem);
