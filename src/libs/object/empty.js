/**
 * Returns true if an Object is empty.
 *
 * @param obj
 * @returns {boolean}
 * @constructor
 */
const IsEmpty = (obj) => {
    for (const i in obj) {
        return false;
    }

    return true;
};

export default IsEmpty;
