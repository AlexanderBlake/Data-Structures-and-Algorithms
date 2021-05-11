class HashTable {
    constructor() {
        this.arr = [];

        for (let i = 0; i < 13; i++) {
            this.arr.push(null);
        }
    }

    hashFunction(value) {
        return value % this.arr.length;
    }

    insert(value) {
        let i = this.hashFunction(value);

        if (this.arr[i] == null) {
            this.arr[i] = value;
        } else {
            let offset = 1;
            let left = (i - offset);
            let right = (i + offset) % this.arr.length;

            if (left < 0) {
                left = this.arr.length - 1;
            }

            while (this.arr[left] != null && this.arr[right] != null && offset < this.arr.length) {
                left = (i - ++offset);
                right = (i + offset) % this.arr.length;

                if (left < 0) {
                    left = this.arr.length - 1;
                }
            }

            if (this.arr[left] == null) {
                this.arr[left] = value;
            } else if (this.arr[right] == null) {
                this.arr[right] = value;
            } else {
                return false;
            }
        }
        return true;
    }

    search(value) {
        return -1;
    }
}

function main() {
    table = new HashTable();

    console.assert(table.insert(24));
    console.assert(table.insert(23));
    console.assert(table.insert(36));
    console.assert(table.insert(49));
    console.assert(table.insert(12));
    console.assert(table.insert(25));
    console.assert(table.insert(0));

    for (let i = 1; i <= 6; i++) {
        console.assert(table.insert(i));
    }

    console.assert(!table.insert(7));

    console.log(table.arr);

    console.assert(table.search(25) == 0, 25);
    console.assert(table.search(49) == 8, 49);
    console.assert(table.search(36) == 9, 36);
    console.assert(table.search(23) == 10, 23);
    console.assert(table.search(24) == 11, 24);
    console.assert(table.search(12) == 12, 12);
    console.assert(table.search(99) == -1, 99);

}

main();