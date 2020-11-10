'use strict';

import React, { Component } from "react";

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
        this.props.addListItem(this.state.input);

        this.setState({ input: '' });
    }

    handleKey(e) {
        if(e.keyCode === 13){
            this.handleAddListItem();
        }
    }

    render() {
        return (
            <div>
                <input onChange={e => this.updateInput(e.target.value)} onKeyDown={this.handleKey} value={this.state.input}/>
                <button onClick={this.handleAddListItem}>add</button>
            </div>
        );
    }
}

export default connect(null, { addListItem })(AddItem);
