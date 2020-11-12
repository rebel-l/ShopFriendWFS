'use strict';

import React, { Component } from 'react';
import styles from './ListItem.scss';

import { connect } from 'react-redux';
import { removeItem } from "../../../redux/actions/shop/list";

const cancelTimeout = 2000; // ms
const progressInterval = 10; // ms

class ListItem extends Component {
    constructor(props) {
        super(props);

        // init attributes
        this.item = props.item;
        this.timer = null;

        // init state
        this.state = {
            progress: 0 + '%',
            active: true
        };

        // register event handler
        this.handleActivate = this.handleActivate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleActivate(){
        if(this.isActive() && this.timer === null) {
            this.deactivate();
            let iterations = cancelTimeout / progressInterval;
            let step = 100 / iterations;
            let counter = 0;
            let self = this;
            this.timer = setInterval(function (){
                counter++;
                let progress = counter * step;

                if(counter < iterations){
                    self.setProgress(progress);
                } else {
                    self.resetTimer();
                    console.log('timed out');
                }
            }, progressInterval);
        } else {
            this.activate();
            console.log('action canceled');
            this.resetTimer();
        }
    }

    handleEdit(id){
        console.log('EDIT', id);
    }

    handleDelete(id){
        this.props.removeItem(id);
    }

    resetTimer(){
        this.setProgress(0);
        clearInterval(this.timer);
        this.timer = null;
    }

    setProgress(value){
        this.setState({progress: value + '%'});
    }

    activate(){
        this.setState({active: true});
    }

    deactivate(){
        this.setState({active: false});
    }

    isActive(){
        return this.state.active;
    }

    render() {
        return (
            <div className={styles.outer}>
                <div className={styles.inner}>
                    <div className={styles.progressContainer} onClick={this.handleActivate}>
                        <div className={`${this.state.active ? styles.progress : styles.progressInactive}`}
                             style={{width: this.state.progress}}>{this.item.name}</div>
                    </div>
                    <button onClick={() => this.handleEdit(this.item.id)}>edit</button>
                    <button onClick={() => this.handleDelete(this.item.id)}>delete</button>
                </div>
            </div>
        );
    }
}

export default connect(null, { removeItem })(ListItem);
