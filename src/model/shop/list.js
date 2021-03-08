function NewList (items) {
    return {
        items,
        sort,
        swapItems,
    };
}

/**
 * Sort orders the items.
 * Default order is by item.active
 */
function sort () {
    for (let i = 0; i < this.items.length - 1; i++) {
        if (!this.items[i].active && this.items[i + 1].active) {
            this.swapItems(i, i + 1);

            for (let j = i; j > 1; j--) {
                if (!this.items[j].active && this.items[j - 1].active) {
                    break;
                }

                this.swapItems(j - 1, j);
            }
        }
    }
}

/**
 * SwapItems swap the item with index a & b.
 *
 * @param a {number}
 * @param b {number}
 */
function swapItems (a, b) {
    const temp = this.items[a];

    this.items[a] = this.items[b];
    this.items[b] = temp;
}

export default NewList;
