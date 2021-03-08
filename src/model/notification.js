export const ERROR = "ERROR";

/**
 * Returns a new notification of type error.
 *
 * @param message
 * @returns {{type: string, message}}
 * @constructor
 */
export function NewError (message) {
    return {
        "type": ERROR,
        message,
    };
}
