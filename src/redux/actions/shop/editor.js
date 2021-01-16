'use strict';

import {SHOP_LIST_EDIT_ITEM} from "../../types/shop/list";

/**
 * Sets the item to edit on the store.
 *
 * @param item
 * @returns {{payload, type: string}}
 */
export function editItem(item) {
    return {
        type: SHOP_LIST_EDIT_ITEM,
        payload: item
    };
}
