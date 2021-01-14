'use strict';

import {SHOP_LIST_EDIT_ITEM} from '../../types';

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
        case SHOP_LIST_EDIT_ITEM:
            return action.payload;
        default:
            return state;
    }
}
