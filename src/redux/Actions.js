'use strict';

import {AddListItem} from './ActionsTypes';

export function addListItem(content){
    return {
        type: AddListItem,
        payload: {
            name: content
        } // TODO: add a model here doing the transformation
    };
}
