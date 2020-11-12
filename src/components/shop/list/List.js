'use strict';

import React, { Component } from 'react';
import styles from './List.scss';
import ListItem from '../list-element/ListItem';

import { connect } from 'react-redux';
import { getList } from '../../../redux/reducers/selectors';

const mapStateToProps = state => {
    return getList(state);
}

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.list}>
                {this.props.listItems && this.props.listItems.length
                    ? this.props.listItems.map((item) => {
                        return <ListItem item={item} key={item.id} />;
                    })
                    : "no items found"}
            </div>
        );
    }
}

export default connect(mapStateToProps)(List);
