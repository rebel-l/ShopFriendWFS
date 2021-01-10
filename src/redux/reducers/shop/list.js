import {
    SHOP_LIST_ADD_ITEM,
    SHOP_LIST_UPDATE_ITEM,
    SHOP_LIST_REMOVE_ITEM
} from "../../types";

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOP_LIST_ADD_ITEM:
            return [...state, ...action.payload];
        case SHOP_LIST_UPDATE_ITEM:
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
