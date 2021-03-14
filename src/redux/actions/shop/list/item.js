import {
    SHOP_LIST_ITEM_ACTIVATE,
    SHOP_LIST_ITEM_DEACTIVATE,
    SHOP_LIST_ITEM_EDIT,
    SHOP_LIST_ITEM_REMOVE,
} from "../../../types/shop/list";

/**
 * Sets the item to edit on the redux store.
 *
 * @param item
 * @returns {{payload, type: string}}
 */
export function editItem (item) {
    return {
        "type": SHOP_LIST_ITEM_EDIT,
        "payload": item,
    };
}

/**
 * Removes an item from the shopping list on the redux store.
 *
 * @param id
 * @returns {{payload, type: string}}
 */
export function removeItem (id) {
    return {
        "type": SHOP_LIST_ITEM_REMOVE,
        "payload": id,
    };
}

/**
 * Deactivates an item from the shopping list in the redux store.
 *
 * @param id {number|string}
 * @returns {{payload, type: string}}
 */
export function deactivateItem (id) {
    return {
        "type": SHOP_LIST_ITEM_DEACTIVATE,
        "payload": id,
    };
}

/**
 * Activates an item from the shopping list in the redux store.
 *
 * @param id {number|string}
 * @returns {{payload, type: string}}
 */
export function activateItem (id) {
    return {
        "type": SHOP_LIST_ITEM_ACTIVATE,
        "payload": id,
    };
}
