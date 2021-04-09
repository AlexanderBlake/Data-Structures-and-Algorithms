class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    insert(value) {
        if (!this.head) {
            this.head = new Node(value);
        } else {
            let walker = this.head;

            while (walker.next) {
                walker = walker.next;
            }

            walker.next = new Node(value);
        }
    }

    // Time Complexity: O(2n) = O(n) Linear Time
    binToDec() {
        if (!this.head) {
            return 0;
        }
        
        let len = 1;
        let walker = this.head;

        while (walker.next) {
            len++;
            walker = walker.next;
        }

        let result = 0;
        let i = 1;
        walker = this.head;

        while (walker.next) {
            result += Math.pow(2, len - i++) * walker.value;
            walker = walker.next;
        }
        return result + Math.pow(2, 0) * walker.value;
    }
}

function main() {
    linkedList = new SLL();

    linkedList.insert(1);
    linkedList.insert(0);
    linkedList.insert(1);

    let result = linkedList.binToDec();
    console.assert(result == 5, result);
}

main();
