import { SHOP_ADD_LIST_ITEM } from "../../types";

const initialState = {
    listItems: []
};

export default function(state= initialState, action) {
    switch (action.type) {
        case SHOP_ADD_LIST_ITEM:
            return {
                ...state,
                listItems: [...state.listItems, action.payload]
            }
        default:
            return state;
    }
}
