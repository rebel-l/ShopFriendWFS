'use strict';

import {
    SHOP_LIST_ITEM_REMOVE,
    SHOP_LIST_ITEM_DEACTIVATE,
    SHOP_LIST_ITEM_ACTIVATE
} from "../../../types/shop/list/item";
import {SHOP_EDITOR_ITEM_ADD, SHOP_EDITOR_ITEM_UPDATE} from '../../../types/shop/editor';
import NewList from '../../../../model/shop/list';

const initialState = NewList([]);

/**
 * takes care about the actions regarding the items in shopping list.
 *
 * @param state
 * @param action
 * @returns {{items: []}}
 */
export default function (state = initialState, action) {
    let list = Object.assign({}, state);

    switch (action.type) {
        case SHOP_EDITOR_ITEM_ADD:
            list.items = [...list.items, ...action.payload];

            break;
        case SHOP_EDITOR_ITEM_UPDATE:
            list.items = list.items.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }

                return item;
            });

            break;
        case SHOP_LIST_ITEM_REMOVE:
            list.items = list.items.filter((item) => item.id !== action.payload);

            break;
        case SHOP_LIST_ITEM_ACTIVATE:
            list.items = list.items.map(item => {
                if (item.id === action.payload) {
                    item.activate();
                }

                return item;
            });

            break;
        case SHOP_LIST_ITEM_DEACTIVATE:
            list.items = list.items.map(item => {
                if (item.id === action.payload) {
                    item.deactivate();
                }

                return item;
            });

            break;
        default:
            return state;
    }

    list.sort();
    return list;
}
