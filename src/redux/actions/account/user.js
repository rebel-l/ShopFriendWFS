import { API } from "../../types/api";
import { ACCOUNT_USER_LOGGED_IN } from "../../types/account/user";

/**
 * Triggers the XHR call to login with facebook.
 *
 * @param accessToken
 * @returns {{payload: {path: string, method: string, service: string}, type: string}}
 */
export function loginFacebook (accessToken) {
    return {
        "type": API,
        "payload": {
            "method": "PUT",
            "service": "auth",
            "path": "/public/facebook/login",
            "data": { "AccessToken": accessToken },
        },
    };
}

/**
 * Triggered as soon as the user was logged in successfully.
 *
 * @param user
 * @returns {{payload, type: string}}
 */
export function loggedIn (user) {
    return {
        "type": ACCOUNT_USER_LOGGED_IN,
        "payload": user,
    };
}
