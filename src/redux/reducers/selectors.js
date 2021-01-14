/**
 * getList returns the shopping list items from the store.
 *
 * @param store
 * @returns {function(*=, *): *[]}
 */
export const getList = store => store.shopList; // TODO: where to put this?

/**
 * getEditItem returns the item for the editor.
 *
 * @param store
 * @returns {function(*=, *): ({}|*)}
 */
export const getEditItem = store => store.shopEditor;
