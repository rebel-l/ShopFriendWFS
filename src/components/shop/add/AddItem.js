'use strict';

import React, {Component} from "react";
import styles from './AddItem.scss';

import {connect} from 'react-redux';
import {addListItem, editItem} from "../../../redux/actions/shop/list";
import {getEditItem} from "../../../redux/reducers/selectors";

const mapStateToProps = state => {
    console.log('MAP1', state);
    console.log('MAP2', getEditItem(state));
    return getEditItem(state);
}

class AddItem extends Component {
    constructor(props) {
        super(props);

        console.log('PROPS', props);

        // init state
        this.state = {
            input: ''
        };

        // register event handler
        this.handleAddListItem = this.handleAddListItem.bind(this);
        this.handleKey = this.handleKey.bind(this);
    }

    updateInput(input) {
        this.setState({input});
    }

    handleAddListItem() {
        let input = this.state.input.trim();
        if (input === '') {
            this.resetInput();
            return;
        }

        this.props.addListItem(input);
        this.props.editItem(null);

        this.resetInput();
    }

    resetInput() {
        this.setState({input: ''});
    }

    handleKey(e) {
        if (e.keyCode === 13) {
            this.handleAddListItem();
        }
    }

    render() {
        let input = this.state.input
        console.log('STATE', this.state);
        if(!input && this.props.name){
            console.log('IF', this.props);
            input = this.props.toString()
        }
        console.log("RENDER", this.props);
        return (
            <div className={styles.addItem}>
                <input
                    className={styles.input}
                    onChange={e => this.updateInput(e.target.value)}
                    onKeyDown={this.handleKey}
                    value={input}/>
                <button className={styles.button} onClick={this.handleAddListItem}>add</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, {addListItem, editItem})(AddItem);
