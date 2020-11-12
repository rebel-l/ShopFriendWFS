let id = 0;

// const errMandatoryName = new Error('name is mandatory');

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
        name: data.length > 0 ? data[0].trim() : 'error', // TODO: how to throw errors with babel?
        amount: data.length > 1 ? data[1].trim() : null,
        active: true
    }
}

export default NewItem;
