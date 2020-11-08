'use strict';

import React, { Component } from "react";

import { connect } from 'react-redux';
import { addListItem } from "../../../redux/Actions";

class AddItem extends Component {
    constructor(props) {
        super(props);

        // init state
        this.state = {
            input: ''
        };

        // register event handler
        this.handleAddListItem = this.handleAddListItem.bind(this);
    }

    updateInput(input){
        this.setState({input});
    }

    handleAddListItem() {
        console.log('INPUT', this.state.input);
        this.props.addListItem(this.state.input);

        this.setState({ input: '' });
    }

    render() {
        return (
            <div>
                <input onChange={e => this.updateInput(e.target.value)} value={this.state.input}/>
                <button onClick={this.handleAddListItem}>add</button>
            </div>
        );
    }
}

export default connect(null, { addListItem })(AddItem);
