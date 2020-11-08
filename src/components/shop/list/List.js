'use strict';

import React, { Component } from "react";
import styles from "./List.scss";
import ListItem from "../list-element/ListItem";

import { connect } from 'react-redux';
import { getList } from "../../../redux/reducers/selectors";

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.state);
        let elements = [];
        elements.push(<ListItem name={"Spinat"} />);
        elements.push(<ListItem name={"Apfel"} />);

        return (
            <div className={styles.list}>
                {elements}
            </div>
        );
    }
}

export default connect(state => ({ list: getList(state)}))(List);
