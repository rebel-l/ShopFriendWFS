import {API} from "../../types/api";
import {ACCOUNT_USER_LOGGED_IN} from "../../types/account/user";

export function loginFacebook(accessToken) {
    return {
        type: API,
        payload: accessToken
    };
}

export function loggedIn(user) {
    return {
        type: ACCOUNT_USER_LOGGED_IN,
        payload: user
    };
}
