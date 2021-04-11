/* eslint-disable default-param-last */

import {
    ACCOUNT_USER_LOGGED_IN,
    ACCOUNT_USER_LOGGED_OUT,
} from "../../types/account/user";

const initialState = {};

/**
 * Handles all user related events.
 *
 * @param state
 * @param action
 * @returns {{}|*}
 */
export function accountUser (state = initialState, action) {
    switch (action.type) {
    case ACCOUNT_USER_LOGGED_IN:
        return action.payload;

    case ACCOUNT_USER_LOGGED_OUT:
        return action.payload;

    default:
        return state;
    }
}
