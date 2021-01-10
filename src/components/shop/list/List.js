'use strict';

import React, { Component } from 'react';
import styles from './List.scss';
import ListItem from '../list-element/ListItem';

import { connect } from 'react-redux';
import { getList } from '../../../redux/reducers/selectors';

const mapStateToProps = state => {
    return {list: getList(state)};
}

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.list}>
                {
                    this.props.list && this.props.list.length ?
                        this.props.list.map((item) => {
                            const key = item.id + '-' + item.name + '-' + item.amount;
                            return <ListItem item={item} key={key} />;
                        })
                        : "no items found"
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(List);
