function NewList (items) {
    return {
        items,

        /**
         * Sort orders the items.
         * Default order is by item.active
         */
        sort () {
            /* eslint-disable  no-magic-numbers */
            for (let i = 0; i < this.items.length - 1; i++) {
                if (!this.items[i].active && this.items[i + 1].active) {
                    this.swapItems(i, i + 1);

                    // eslint-disable-next-line id-length
                    for (let j = i; j > 1; j--) {
                        if (!this.items[j].active && this.items[j - 1].active) {
                            break;
                        }

                        this.swapItems(j - 1, j);
                    }
                }
            }
        },

        /**
         * SwapItems swap the item with index a & b.
         *
         * @param first {number}
         * @param second {number}
         */
        swapItems (first, second) {
            const temp = this.items[first];

            this.items[first] = this.items[second];
            this.items[second] = temp;
        },
    };
}

export default NewList;
