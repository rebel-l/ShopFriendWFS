'use strict';

import {SHOP_LIST_ITEM_EDIT} from '../../types/shop/list/item';

const initialState = {};

/**
 * takes care about the actions regarding the editor.
 *
 * @param state
 * @param action
 * @returns {{}|*}
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case SHOP_LIST_ITEM_EDIT:
            return action.payload;
        default:
            return state;
    }
}
