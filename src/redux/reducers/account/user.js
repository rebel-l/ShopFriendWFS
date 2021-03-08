import { ACCOUNT_USER_LOGGED_IN } from "../../types/account/user";

const initialState = {};

/**
 * Handles all user related events.
 *
 * @param state
 * @param action
 * @returns {{}|*}
 */
export default function (state = initialState, action) {
    switch (action.type) {
    case ACCOUNT_USER_LOGGED_IN:
        return action.payload;

    default:
        return state;
    }
}
