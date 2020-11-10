'use strict';

import React, { Component } from "react";
import styles from './AddItem.scss';

import { connect } from 'react-redux';
import { addListItem } from "../../../redux/actions/shop/list";

class AddItem extends Component {
    constructor(props) {
        super(props);

        // init state
        this.state = {
            input: ''
        };

        // register event handler
        this.handleAddListItem = this.handleAddListItem.bind(this);
        this.handleKey = this.handleKey.bind(this);
    }

    updateInput(input){
        this.setState({input});
    }

    handleAddListItem() {
        let input = this.state.input.trim();
        if(input === '') {
            this.resetInput();
            return;
        }

        this.props.addListItem(input);

        this.resetInput();
    }

    resetInput() {
        this.setState({ input: '' });
    }

    handleKey(e) {
        if(e.keyCode === 13){
            this.handleAddListItem();
        }
    }

    render() {
        return (
            <div className={styles.addItem}>
                <input
                    className={styles.input}
                    onChange={e => this.updateInput(e.target.value)}
                    onKeyDown={this.handleKey} value={this.state.input}/>
                <button className={styles.button} onClick={this.handleAddListItem}>add</button>
            </div>
        );
    }
}

export default connect(null, { addListItem })(AddItem);
