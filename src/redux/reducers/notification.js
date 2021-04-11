/* eslint-disable default-param-last */

import { NOTIFICATION_ADD, NOTIFICATION_DELETE } from "../types/notification";

const initialState = [];

/**
 * Takes care about the notifications in the store.
 *
 * @param state
 * @param action
 * @returns {[]|*[]}
 */
export function notification (state = initialState, action) {
    switch (action.type) {
    case NOTIFICATION_ADD:
        return [
            ...state,
            ...action.payload,
        ];

    case NOTIFICATION_DELETE:
        return initialState;

    default:
        return state;
    }
}
