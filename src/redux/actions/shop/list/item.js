'use strict';

import {SHOP_LIST_ITEM_EDIT, SHOP_LIST_ITEM_REMOVE} from '../../../types/shop/list/item';

/**
 * Sets the item to edit on the store.
 *
 * @param item
 * @returns {{payload, type: string}}
 */
export function editItem(item) {
    return {
        type: SHOP_LIST_ITEM_EDIT,
        payload: item
    };
}

/**
 * Removes an item from the shopping list on store.
 *
 * @param id
 * @returns {{payload, type: string}}
 */
export function removeItem(id) {
    return {
        type: SHOP_LIST_ITEM_REMOVE,
        payload: id
    };
}
