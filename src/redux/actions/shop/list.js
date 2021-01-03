'use strict';

import {
    SHOP_LIST_ADD_ITEM,
    SHOP_LIST_EDIT_ITEM,
    SHOP_LIST_REMOVE_ITEM
} from '../../types';
import NewItems from "../../../model/shop/items";

export function addListItem(content) { // TODO: rename to addItem
    return {
        type: SHOP_LIST_ADD_ITEM,
        payload: NewItems(content)
    };
}

export function removeItem(id) {
    return {
        type: SHOP_LIST_REMOVE_ITEM,
        payload: id
    };
}

export function editItem(item) {
    return {
        type: SHOP_LIST_EDIT_ITEM,
        payload: item
    };
}
