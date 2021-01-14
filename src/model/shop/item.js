/**
 * id is a global (temporary) autoincrement to identify the items in the frontend.
 *
 * @type {number}
 */
let id = 0;

/**
 * Creates a new item from given string.
 *
 * @param content
 * @returns {{amount: (string|null), name: (string|*), active: boolean, id: number}}
 * @constructor
 * @throws error if name is no identified
 */
function NewItem(content) {
    let data = content.split(':');

    return {
        id: id++,
        name: data.length > 0 ? data[0].trim() : '',
        amount: data.length > 1 ? data[1].trim() : null,
        active: true,
        toString
    }
}

/**
 * toString returns the name and the amount of an item like it is represented in frontend.
 *
 * @returns {string}
 */
function toString() {
    let amount = this.amount !== null ? ':' + this.amount : '';
    return this.name + amount;
}

export default NewItem;
