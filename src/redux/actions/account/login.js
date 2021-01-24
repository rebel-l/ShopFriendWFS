'use strict';

import {ACCOUNT_LOGIN_FACEBOOK} from "../../types/account/login";
import axios from "axios";

export function loginFacebook(accessToken) {
    let data = {
        'AccessToken': accessToken
    }

    // TODO: move to middleware?
    axios.put('https://auth.shopfriend.test/public/facebook/login', data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    return {
        type: ACCOUNT_LOGIN_FACEBOOK,
        payload: accessToken
    };
}
