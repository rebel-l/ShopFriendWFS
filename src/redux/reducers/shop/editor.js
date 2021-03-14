/* eslint-disable default-param-last */

import { SHOP_LIST_ITEM_EDIT } from "../../types/shop/list";

const initialState = {};

/**
 * Takes care about the actions regarding the editor.
 *
 * @param state
 * @param action
 * @returns {{}|*}
 */
export function shopEditor (state = initialState, action) {
    switch (action.type) {
    case SHOP_LIST_ITEM_EDIT:
        return action.payload;

    default:
        return state;
    }
}
