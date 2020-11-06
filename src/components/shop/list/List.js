'use strict';

import React, { Component } from "react";
import styles from "./List.scss";
import ListElement from "./../list-element/ListElement";

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let elements = [];
        elements.push(<ListElement name={"Spinat"} />);
        elements.push(<ListElement name={"Apfel"} />);

        return (
            <div className={styles.list}>
                {elements}
            </div>
        );
    }
}

export default List;
