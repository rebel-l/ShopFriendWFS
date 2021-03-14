import { connect } from "react-redux";

import Item from "./list/Item";

import PropTypes from "prop-types";
import React from "react";

import styles from "./List.scss";

const mapStateToProps = (state) => ({ "items": state.shopList.items });

/**
 * List is the UI component for the shopping list.
 */
function List (props) {
    const { items } = props;

    return (
        <div className={styles.list}>
            {
                items && items.length ?
                    items.map((item) => (
                        <Item
                            item={item}
                            key={item.getKey()}
                        />
                    )) :
                    "no items found"
            }
        </div>
    );
}

List.propTypes = { "items": PropTypes.array.isRequired };

export default connect(mapStateToProps)(List);
