class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Space Complexity: O(n)
// Best/Average Time Complexity (Search, Insert, Deletion): O(1)
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

    findNeighboringPosition(value, i, isSearch) {
        let offset = 1;
        let left = (i - offset);
        let right = (i + offset) % this.arr.length;
        let comparisonValue = isSearch ? value : null;

        if (left < 0) {
            left = this.arr.length - 1;
        }

        while (this.arr[left] != comparisonValue && this.arr[right] != comparisonValue && offset < this.arr.length / 2) {
            left = (i - ++offset);
            right = (i + offset) % this.arr.length;

            if (left < 0) {
                left = this.arr.length - 1;
            }
        }

        return [left, right];
    }

    insert(value) {
        let i = this.hashFunction(value);

        if (this.arr[i] == null) {
           this.arr[i] = new Node(value); 
        } else {
            let walker = this.arr[i];
            while (walker.next) {
                walker = walker.next;
            }

            walker.next = new Node(value);
        }        
    }

    search(value) {

    }

    /*
    insert(value) {
        let i = this.hashFunction(value);

        if (this.arr[i] == null) {
            this.arr[i] = value;
        } else {
            let [left, right] = this.findNeighboringPosition(value, i, false);

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
        let i = this.hashFunction(value);

        if (this.arr[i] == value) {
            return i;
        }

        let [left, right] = this.findNeighboringPosition(value, i, true);

        if (this.arr[left] == value) {
            return left;
        } else if (this.arr[right] == value) {
            return right;
        }
        
        return -1;
    }
    */
}

function main() {
    table = new HashTable();

    table.insert(24);
    table.insert(23);
    table.insert(36);
    table.insert(49);
    table.insert(12);
    table.insert(25);
    table.insert(0);

    for (let i = 1; i < 10; i++) {
        table.insert(i);
    }

    // console.assert(!table.insert(7));

    console.log(table.arr);

    let result = table.search(25);
    console.assert(result == 0, "Expected: " + 0 + ", Actual: " + result);
    result = table.search(0);
    console.assert(result == 1, "Expected: " + 1 + ", Actual: " + result);
    result = table.search(49);
    console.assert(result == 8, "Expected: " + 8 + ", Actual: " + result);
    result = table.search(36);
    console.assert(result == 9, "Expected: " + 9 + ", Actual: " + result);
    result = table.search(23);
    console.assert(result == 10, "Expected: " + 10 + ", Actual: " + result);
    result = table.search(24);
    console.assert(result == 11, "Expected: " + 11 + ", Actual: " + result);
    result = table.search(12);
    console.assert(result == 12, "Expected: " + 12 + ", Actual: " + result);
    result = table.search(99);
    console.assert(result == -1, "Expected: " + -1 + ", Actual: " + result);
}

main();