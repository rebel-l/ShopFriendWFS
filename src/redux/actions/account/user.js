import { ACCOUNT_USER_LOGGED_IN } from "../../types/account/user";
import { API } from "../../types/api";
import store from "store2";

const
    pathFacebookLogin = "/public/facebook/confirmation",
    pathLogout = "/restricted/logout",
    service = "auth";

/**
 * Triggered as soon as the user was logged in successfully.
 *
 * @param response
 * @returns {{payload, type: string}}
 */
export function loggedIn (response) {
    if (response.Tokens) {
        store.session.set("accessToken", response.Tokens.access, true); // TODO: move to a manager handling saving, loading and refresh of tokens
        store.local.set("refreshToken", response.Tokens.refresh, true);
    }

    return {
        "type": ACCOUNT_USER_LOGGED_IN,
        "payload": { "FirstName": response.FirstName },
    };
}

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
            service,
            "path": pathFacebookLogin,
            "data": { "AccessToken": accessToken },
            "dispatch": loggedIn,
        },
    };
}

export function loggedOut () {
    console.log("logged out");
}

export function logout () {
    return {
        "type": API,
        "payload": {
            "method": "POST",
            service,
            "path": pathLogout,
            // TODO: maybe we should send also refresh token to delete it in backend
            "dispatch": loggedOut,
        },
    };
}
