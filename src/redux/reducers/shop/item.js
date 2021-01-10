'use strict';

import {SHOP_LIST_EDIT_ITEM} from '../../types';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOP_LIST_EDIT_ITEM:
            return action.payload;
        default:
            return state;
    }
}