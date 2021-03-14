import { accountUser } from "./account/user";

import { combineReducers } from "redux";

import { notification } from "./notification";

import { shopEditor } from "./shop/editor";
import { shopList } from "./shop/list";

import { spinner } from "./spinner";

export default combineReducers({
    accountUser,
    notification,
    shopList,
    shopEditor,
    spinner,
});
