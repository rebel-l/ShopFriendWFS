'use strict';

import {AddListItem} from './ActionsTypes';

export const addListItem = content => ({
    type: AddListItem,
    payload: {
        content
    }
});
