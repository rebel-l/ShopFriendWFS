import { combineReducers } from 'redux';
import listItems from './shop/list';
import editItem from './shop/item';

export default combineReducers({listItems, editItem});
