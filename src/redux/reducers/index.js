import { combineReducers } from 'redux';

import accountUser from './account/user';

import shopList from './shop/list/item';
import shopEditor from './shop/editor';

export default combineReducers({accountUser, shopList, shopEditor});
