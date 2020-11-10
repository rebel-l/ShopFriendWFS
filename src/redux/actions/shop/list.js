'use strict';

import {SHOP_ADD_LIST_ITEM} from '../../types';

export function addListItem(content){
    return {
        type: SHOP_ADD_LIST_ITEM,
        payload: {
            name: content
        } // TODO: add a model here doing the transformation
    };
}
