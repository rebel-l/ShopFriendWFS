import { SHOP_EDITOR_ITEM_ADD, SHOP_EDITOR_ITEM_UPDATE } from "../../types/shop/editor";
import NewItems from "../../../model/shop/items";
import NewItem from "../../../model/shop/item";

/**
 * Adds one or more items to the shopping list in store.
 *
 * @param content
 * @returns {{payload: *[], type: string}}
 */
export function addItem (content) {
    return {
        "type": SHOP_EDITOR_ITEM_ADD,
        "payload": NewItems(content),
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
    // TODO: only first item can be editable, if we get more items comma separated we should add them as new ones
    const item = NewItem(content);

    item.id = id;

    return {
        "type": SHOP_EDITOR_ITEM_UPDATE,
        "payload": item,
    };
}
