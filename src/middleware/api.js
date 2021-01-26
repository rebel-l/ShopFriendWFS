import axios from "axios";

import {loggedIn} from "../redux/actions/account/user";
import {API} from "../redux/types/api";

const api = ({dispatch}) => next => action => {
    next(action);

    if (action.type !== API) return;

    console.log('API MIDDLEWARE', action);

    let body = {
        'AccessToken': action.payload
    }

    // TODO: do general approach for any API request

    axios.put('https://auth.shopfriend.test/public/facebook/login', body)
        .then(function ({data}) {
            dispatch(loggedIn(data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default api;
