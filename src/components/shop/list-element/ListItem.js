'use strict';

import React, { Component } from 'react';
import styles from './ListItem.scss';

const cancelTimeout = 2000; // ms
const progressInterval = 10; // ms

class ListItem extends Component {
    constructor(props) {
        super(props);

        // init attributes
        this.name = props.name;
        this.timer = null;

        // init state
        this.state = {
            progress: 0 + '%',
            active: true
        };

        // register event handler
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
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
            <div className={styles.listItemOuter} onClick={this.handleClick}>
                <div className={`${this.state.active ? styles.listItemInner : styles.listItemInnerInactive}`}
                     style={{width: this.state.progress}}>{this.name}</div>
            </div>
        );
    }
}

export default ListItem;
