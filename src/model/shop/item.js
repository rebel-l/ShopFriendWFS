const
    first = 0,
    second = 1;

/**
 * Id is a global (temporary) autoincrement to identify the items in the frontend.
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
function NewItem (content) {
    const item = content.split(":");

    return {
        "id": id++,
        "name": item.length > first ? item[first].trim() : "",
        "amount": item.length > second ? item[second].trim() : null,
        "active": true,

        /**
         * Activate the item
         */
        activate () {
            this.active = true;
        },

        /**
         * Deactivate the item
         */
        deactivate () {
            this.active = false;
        },

        /**
         * Returns a unique key for this item.
         *
         * @returns {string}
         */
        getKey () {
            // eslint-disable-next-line no-warning-comments
            // TODO: use a hash
            return `${this.id}-${this.name}-${this.amount}`;
        },

        /**
         * ToString returns the name and the amount of an item like it is represented in frontend.
         *
         * @returns {string}
         */
        toString () {
            const amount = this.amount === null ? "" : `:${this.amount}`;

            return this.name + amount;
        },
    };
}

export default NewItem;
