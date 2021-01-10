'use strict';

import {
    SHOP_LIST_ADD_ITEM,
    SHOP_LIST_UPDATE_ITEM,
    SHOP_LIST_REMOVE_ITEM,
    SHOP_LIST_EDIT_ITEM

} from '../../types';
import NewItems from "../../../model/shop/items";
import NewItem from "../../../model/shop/item";

export function addListItem(content) { // TODO: rename to addItem
    return {
        type: SHOP_LIST_ADD_ITEM,
        payload: NewItems(content)
    };
}

export function updateListItem(id, content) {
    // TODO: only first item can be editable, if we get more items comma seperated we should add them as new ones
    let item = NewItem(content);
    item.id = id;

    return {
        type: SHOP_LIST_UPDATE_ITEM,
        payload: item
    }
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
