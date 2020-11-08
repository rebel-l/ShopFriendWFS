'use strict';

import {AddListItem} from './ActionsTypes';

export function addListItem(content){
    console.log('ACTION', content);
    return {
        type: AddListItem,
        payload: {
            content
        }
    };
}
