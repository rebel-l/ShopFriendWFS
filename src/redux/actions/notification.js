import { NOTIFICATION_ADD, NOTIFICATION_DELETE } from "../types/notification";

/**
 * Sends notifications to the user.
 *
 * @param message
 * @returns {{payload: *[], type: string}}
 */
export function addNotification (message) {
    if (Array.isArray(message) === false) {
        message = [message];
    }

    return {
        "type": NOTIFICATION_ADD,
        "payload": message,
    };
}

/**
 * Deletes notifications.
 *
 * @returns {{type: string}}
 */
export function deleteNotifications () {
    return { "type": NOTIFICATION_DELETE };
}
