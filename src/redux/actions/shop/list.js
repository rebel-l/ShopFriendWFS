'use strict';

import {SHOP_ADD_LIST_ITEM, SHOP_LIST_REMOVE_ITEM} from '../../types';

let id = 0;

export function addListItem(content){
    id++;

    return {
        type: SHOP_ADD_LIST_ITEM,
        payload: {
            id: id,
            name: content
        } // TODO: add a model here doing the transformation
    };
}

export function removeItem(id){
    return {
        type: SHOP_LIST_REMOVE_ITEM,
        payload: id
    };
}
