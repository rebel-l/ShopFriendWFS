import NewItem from "./item";

/**
 * Creates new list of items based on string.
 *
 * @param content
 * @returns {[]}
 * @constructor
 * @throws error if item has no name
 */
function NewItems(content) {
    let data = content.split(',');
    let items = [];

    for (let i = 0; i < data.length; i++) {
        let item = data[i].trim();
        if (item === '') {
            continue;   // empty items are skipped
        }

        items.push(NewItem(item));
    }

    return items;
}

export default NewItems;
