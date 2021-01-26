import {ACCOUNT_USER_LOGGED_IN} from "../../types/account/user";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACCOUNT_USER_LOGGED_IN:
            console.log('REDUCER', action);
            return action.payload;
        default:
            return state;
    }
}
