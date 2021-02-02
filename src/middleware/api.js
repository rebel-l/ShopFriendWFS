import axios from "axios";

import {addNotification} from "../redux/actions/notification";
import {loggedIn} from "../redux/actions/account/user";
import {startSpinner, stopSpinner} from "../redux/actions/spinner";

import {API} from "../redux/types/api";
import {NewError} from "../model/notification";

/**
 * Placeholder where to replace service name.
 *
 * @type {string}
 */
const keyService = '{service}';

/**
 * Base URL temporary from local environment.
 *
 * TODO: needs to be configured by environment (should be generated by webpack)
 *
 * @type {string}
 */
const baseURL = 'https://' + keyService + '.shopfriend.test';

/**
 * The API middleware on which to act on any API action.
 *
 * @param dispatch
 * @returns {function(*): function(*=): undefined}
 */
const api = ({dispatch}) => next => action => {
    next(action);

    if (action.type !== API) return;

    dispatch(startSpinner());

    let errs = validatePayload(action.payload);
    if (errs.length > 0) {
        dispatch(addNotification(NewError('error parsing API payload')));
        return;
    }

    const dataOrParams = ["GET", "DELETE"].includes(action.payload.method) ? "params" : "data";

    axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';

    axios.request({
        url: getURL(action.payload),
        method: action.payload.method,
        [dataOrParams]: action.payload.data
    }).then(({data}) => {
        dispatch(loggedIn(data));
    }).catch(error => {
        dispatch(addNotification(NewError(error.message)));
    }).finally(() => {
        dispatch(stopSpinner());
    });
}

/**
 * Returns an empty array (valid) if the payload received has all mandatory fields set. Otherwise (invalid)
 * it contains entries describing the missing fields.
 *
 * @param payload
 * @returns {[]}
 */
const validatePayload = (payload) => {
    let errs = []

    if (!payload.method) {
        errs.push('payload has no method');
    }

    if (!payload.service) {
        errs.push('payload has no service defined');
    }

    if (!payload.path) {
        errs.push('payload did not define a path');
    }

    return errs
}

/**
 * Builds the URL based on the payload received.
 *
 * @param payload
 * @returns {string}
 */
const getURL = payload => baseURL.replace(keyService, payload.service) + payload.path;

export default api;
