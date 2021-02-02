import { combineReducers } from 'redux';

import accountUser from './account/user';

import notification from './notification';

import shopList from './shop/list/item';
import shopEditor from './shop/editor';

import spinner from './spinner';

export default combineReducers({
    accountUser,
    notification,
    shopList,
    shopEditor,
    spinner
});
