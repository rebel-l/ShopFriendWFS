import {
    SHOP_LIST_ADD_ITEM,
    SHOP_LIST_EDIT_ITEM,
    SHOP_LIST_REMOVE_ITEM
} from "../../types";

const initialState = {
    listItems: [],
    editItem: null
};

export default function(state= initialState, action) {
    switch (action.type) {
        case SHOP_LIST_ADD_ITEM:
            return {
                ...state,
                listItems: [...state.listItems, ...action.payload]
            }
        case SHOP_LIST_REMOVE_ITEM:
            return {
                ...state,
                listItems: state.listItems.filter((item) => item.id !== action.payload)
            };
        case SHOP_LIST_EDIT_ITEM:
            // state.editItem.push(action.payload);
            return {
                ...state,
                editItem: action.payload
            };
        default:
            return state;
    }
}
