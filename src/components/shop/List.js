import React, { Component } from 'react';
import styles from './List.scss';
import Item from './list/Item';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        items: state.shopList.items
    };
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
                    this.props.items && this.props.items.length ?
                        this.props.items.map((item) => {
                            return <Item item={item} key={item.getKey()} />;
                        })
                        : 'no items found'
                }
            </div>
        );
    }
}

export default connect(mapStateToProps)(List);
