'use strict';

import {SHOP_LIST_REMOVE_ITEM} from "../../types/shop/list";
import {SHOP_EDITOR_ITEM_ADD, SHOP_EDITOR_ITEM_UPDATE} from '../../types/shop/editor';

const initialState = [];

/**
 * takes care about the actions regarding the shopping list.
 *
 * @param state
 * @param action
 * @returns {[]|(*)[]|*[]}
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case SHOP_EDITOR_ITEM_ADD:
            return [...state, ...action.payload];
        case SHOP_EDITOR_ITEM_UPDATE:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }

                return item;
            });
        case SHOP_LIST_REMOVE_ITEM:
            return state.filter((item) => item.id !== action.payload);
        default:
            return state;
    }
}
