'use strict';

import styles from './ListElement.scss';
import React, { Component } from 'react';

const cancelTimeout = 10000;
const cancelTimer = 100; // TODO: better naming

class ListElement extends Component {
    constructor(props) {
        super(props);

        // init attributes
        this.timer = null;

        // register event handler
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        if(this.timer === null) {
            let maxIterations = cancelTimeout / cancelTimer;
            let counter = 0;
            let self = this;
            this.timer = setInterval(function (){
                if(counter < maxIterations){
                    console.log('animate', counter * cancelTimer);
                    counter++;
                } else {
                    self.resetTimer();
                    console.log('timed out');
                }
            }, cancelTimer);
        } else {
            console.log('action canceled');
            this.resetTimer();
        }
    }

    resetTimer(){
        clearInterval(this.timer);
        this.timer = null;
    }

    render() {
        return (
            <div className={styles.listElementOuter}>
                <div className={styles.listElement} onClick={this.handleClick}>ELEMENT</div>
            </div>
        );
    }
}

export default ListElement;
