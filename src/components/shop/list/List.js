'use strict';

import React, { Component } from "react";
import styles from "./List.scss";
import ListItem from "../list-element/ListItem";

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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

export default List;
