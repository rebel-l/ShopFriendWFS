import { NOTIFICATION_ADD, NOTIFICATION_DELETE } from "../types/notification";

/**
 * Sends notifications to the user.
 *
 * @param message
 * @returns {{payload: *[], type: string}}
 */
export function addNotification (message) {
    let msg = message;

    if (Array.isArray(msg) === false) {
        msg = [msg];
    }

    return {
        "type": NOTIFICATION_ADD,
        "payload": msg,
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
