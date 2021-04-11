import { SHOP_EDITOR_ITEM_ADD, SHOP_EDITOR_ITEM_UPDATE } from "../../types/shop/editor";
import newItem from "../../../model/shop/item";
import newItems from "../../../model/shop/items";

/**
 * Adds one or more items to the shopping list in store.
 *
 * @param content
 * @returns {{payload: *[], type: string}}
 */
export function addItem (content) {
    return {
        "type": SHOP_EDITOR_ITEM_ADD,
        "payload": newItems(content),
    };
}

/**
 * Updates an item in the shopping list on store.
 *
 * @param id
 * @param content
 * @returns {{payload: {amount: (string|null), name: (string|*), active: boolean, id: number}, type: string}}
 */
export function updateItem (id, content) {
    // eslint-disable-next-line no-warning-comments
    // TODO: only first item can be editable, if we get more items comma separated we should add them as new ones
    const item = newItem(content);

    item.id = id;

    return {
        "type": SHOP_EDITOR_ITEM_UPDATE,
        "payload": item,
    };
}
