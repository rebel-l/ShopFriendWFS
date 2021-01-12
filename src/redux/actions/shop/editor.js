import {SHOP_LIST_EDIT_ITEM} from "../../types";

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
