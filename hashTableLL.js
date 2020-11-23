class Node {
    constructor(key) {
        this.key = key;
        this.next = null;
    }
}

class HashTable {
    constructor() {
        this.table = [];
        this.SIZE = 7;
        this.table.length = this.SIZE;
    }

    hashFunction(key) {
        return key % this.SIZE;
    }

    insert(key) {
        let index = this.hashFunction(key);

        if (!this.table[index]) {
            this.table[index] = new Node(key);  
        } else {
            let walker = this.table[index];
            while (walker.next) {
                walker = walker.next;
            }

            walker.next = new Node(key);
        }
    }

    display() {
        let outputString;
        let walker;

        for (let i = 0; i < this.SIZE; i++) {
            outputString = i.toString() + ": ";
            walker = this.table[i];

            if (walker) {
                outputString += walker.key;

                while (walker.next) {
                    walker = walker.next;
                    outputString += " -> " + walker.key;
                }

                console.log(outputString);
            } else {
                console.log(outputString + "null");
            }

            
        }
    }

    contains(key) {
        let index = this.hashFunction(key);

        if (!this.table[index]) {
            return false;
        } else {
            let walker = this.table[index];

            while (walker.next && walker.key != key) {
                walker = walker.next;
            }

            if (walker.key == key) {
                return true;
            }
        }
        return false;
    }

    selectionSort() {
        for (let i = 0; i < this.SIZE; i++) {
            if (this.table[i]) {
                let select = this.table[i];
                let walker = select.next;

                while (walker) {
                    if (select.key > walker.key) {
                        select = walker;
                    }
                    walker = walker.next;
                }

                /*let curr = this.table[i];
                this.table[i] = select;*/
            }
        }
    }
}

function main() {
    table = new HashTable();

    table.insert(24);
    table.insert(12);
    table.insert(3);
    table.insert(10);
    table.insert(9);
    table.insert(0);
    table.insert(7);
    /*table.display();

    console.log(table.contains(24));
    console.log(table.contains(8));
    console.log(table.contains(10));
    console.log(table.contains(17));
    console.log(table.contains(3));*/
    table.selectionSort();
    table.display();
}

main();
