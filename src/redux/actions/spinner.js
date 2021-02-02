import {SPINNER_START, SPINNER_STOP} from "../types/spinner";

/**
 * Starts spinner.
 *
 * @returns {{type: string}}
 */
export function startSpinner() {
    return {
        type: SPINNER_START
    };
}

/**
 * Stops spinner.
 *
 * @returns {{type: string}}
 */
export function stopSpinner() {
    return {
      type: SPINNER_STOP
    };
}
