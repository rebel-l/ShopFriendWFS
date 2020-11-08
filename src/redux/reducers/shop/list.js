import { AddListItem } from "../../ActionsTypes";

const initialState = {
    listItems: []
};

export default function(state= initialState, action) {
    console.log('REDUCER', action);
    switch (action.type) {
        case AddListItem:
            return {
                ...state,
                listItems: [...state.listItems, action.payload.content]
            }
        default:
            return state;
    }
}
