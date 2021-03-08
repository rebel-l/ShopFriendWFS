/**
 * Returns true if an Object is empty.
 *
 * @param obj
 * @returns {boolean}
 * @constructor
 */
const isEmpty = (obj) => {
    // eslint-disable-next-line guard-for-in,no-unreachable-loop
    for (const i in obj) {
        return false;
    }

    return true;
};

export default isEmpty;
