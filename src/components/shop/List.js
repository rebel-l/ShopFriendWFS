'use strict';

import React, { Component } from 'react';
import styles from './List.scss';
import Item from './list/Item';

import { connect } from 'react-redux';
import { getList } from '../../redux/reducers/selectors';

const mapStateToProps = state => {
    return {list: getList(state)};
}

/**
 * List is the UI component for the shopping list.
 */
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
                            return <Item item={item} key={key} />;
                        })
                        : "no items found"
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(List);
