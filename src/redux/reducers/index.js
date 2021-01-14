import { combineReducers } from 'redux';
import shopList from './shop/list';
import shopEditor from './shop/editor';

export default combineReducers({shopList, shopEditor});
