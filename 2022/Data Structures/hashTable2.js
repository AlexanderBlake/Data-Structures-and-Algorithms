class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class HashTable {
    constructor() {
        this.table = [];
        this.SIZE = 7;

        for (let i = 0; i < this.SIZE; i++) {
            this.table.push(null);
        }
    }

    hashFunction(value) {
        return value % this.SIZE;
    }

    insert(value) {
        let index = this.hashFunction(value);
        let current = this.table[index];

        if (current === null) {
            this.table[index] = new Node(value);
        } else {
            while (current.next) {
                current = current.next;
            }

            current.next = new Node(value);
            current.next.prev = current;
        }
    }

    search(value) {
        let index = this.hashFunction(value);
        let current = this.table[index];

        if (current) {
            while (current.next && current.value !== value) {
                current = current.next;
            }

            if (current.value === value) {
                return current;
            }
        }

        return null;
    }

    display() {
        let current;
        let myString;

        for (let i = 0; i < this.SIZE; i++) {
            current = this.table[i];
            myString = i + ': '

            if (!current) {
                myString += 'null';
            } else {
                while (current.next) {
                    myString += current.value + ' <-> ';
                    current = current.next;
                }

                myString += current.value;
            }

            console.log(myString);
        }
    }
}

function main() {
    let table = new HashTable();

    table.insert(24);
    table.insert(12);
    table.insert(6);
    table.insert(48);
    table.insert(96);
    table.insert(3);
    table.insert(100);
    table.insert(0);
    table.insert(200);
    table.insert(800);
    table.insert(1600);
    table.insert(25);

    table.display();

    console.log(table.search(1600));
}

main();
