import { SPINNER_START, SPINNER_STOP } from "../types/spinner";

const initialState = false;

/**
 * Start/ stops the spinner regarding the action.
 *
 * @param state
 * @param action
 * @returns {boolean}
 */
export default function (state = initialState, action) {
    switch (action.type) {
    case SPINNER_START:
        return true;

    case SPINNER_STOP:
        return false;

    default:
        return state;
    }
}
