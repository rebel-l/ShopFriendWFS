'use strict';

import {
    SHOP_LIST_ADD_ITEM,
    SHOP_LIST_UPDATE_ITEM,
    SHOP_LIST_REMOVE_ITEM,

} from '../../types';
import NewItems from "../../../model/shop/items";
import NewItem from "../../../model/shop/item";

/**
 * Adds one or more items to the shopping list in store.
 *
 * @param content
 * @returns {{payload: *[], type: string}}
 */
export function addItem(content) {
    return {
        type: SHOP_LIST_ADD_ITEM,
        payload: NewItems(content)
    };
}

/**
 * Updates an item in the shopping list on store.
 *
 * @param id
 * @param content
 * @returns {{payload: {amount: (string|null), name: (string|*), active: boolean, id: number}, type: string}}
 */
export function updateItem(id, content) {
    // TODO: only first item can be editable, if we get more items comma separated we should add them as new ones
    let item = NewItem(content);
    item.id = id;

    return {
        type: SHOP_LIST_UPDATE_ITEM,
        payload: item
    }
}

/**
 * Removes an item from the shopping list on store.
 *
 * @param id
 * @returns {{payload, type: string}}
 */
export function removeItem(id) {
    return {
        type: SHOP_LIST_REMOVE_ITEM,
        payload: id
    };
}
