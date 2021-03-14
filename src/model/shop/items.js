import newItem from "./item";

/**
 * Creates new list of items based on string.
 *
 * @param content
 * @returns {[]}
 * @constructor
 * @throws error if item has no name
 */
function newItems (content) {
    const items = [],
        list = content.split(",");

    for (let i = 0; i < list.length; i++) {
        const item = list[i].trim();

        if (item === "") {
            // Empty items are skipped
            continue;
        }

        items.push(newItem(item));
    }

    return items;
}

export default newItems;
