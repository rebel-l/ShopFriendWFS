'use strict';

import styles from './ListElement.scss';
import React, { Component } from 'react';

const cancelTimeout = 2000; // ms
const progressInterval = 10; // ms

class ListElement extends Component {
    constructor(props) {
        super(props);

        // init attributes
        this.timer = null;

        // init state
        this.state = {
            progress: 0 + '%',
            active: true
        }

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
            <div className={styles.listElementOuter} onClick={this.handleClick}>
                <div className={`${this.state.active ? styles.listElementInner : styles.listElementInnerInactive}`}
                     style={{width: this.state.progress}}>ELEMENT</div>
            </div>
        );
    }
}

export default ListElement;
