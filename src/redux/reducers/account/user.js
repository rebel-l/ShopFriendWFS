'use strict';

import {ACCOUNT_LOGIN_FACEBOOK} from "../../types/account/login";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACCOUNT_LOGIN_FACEBOOK:
            console.log(action);
            return state;
        default:
            return state;
    }
}
