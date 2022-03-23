class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// O(n): Linear Space
class LinkedList {
    constructor() {
        this.head = null;
    }

    // O(1): Constant Time
    prepend(value) {
        if (!this.head) {
            this.append(value);
        } else {
            let newHead = new Node(value);
            
            newHead.next = this.head;
            newHead.prev = this.head.prev;
            newHead.prev.next = newHead;

            this.head.prev = newHead;
            this.head = newHead;
        }
    }

    // O(1): Constant Time
    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            this.head.prev = this.head;
            this.head.next = this.head;
        } else {
            let newNode = new Node(value);

            if (this.head === this.head.next) {
                this.head.next = newNode;
                newNode.prev = this.head;
            } else {
                this.head.prev.next = newNode;
                newNode.prev = this.head.prev;
            }

            this.head.prev = newNode;
            newNode.next = this.head;
        }
    }

    // O(n) Linear Time T(n / 2)
    insert(index, value) {
        if (!this.head || index >= this.length()) {
            this.append(value);
        } else if (index === 0) {
            this.prepend(value);
        } else {
            let current = this.head;
            let newNode = new Node(value);

            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }

            newNode.next = current.next;
            newNode.prev = current;
            current.next = newNode;
            newNode.next.prev = newNode;
        }
    }

    // O(n) Linear Time
    length() {
        if (!this.head) {
            return 0;
        }

        let i = 0;
        let current = this.head;

        do
        {
            i++;
            current = current.next;

        } while (current !== this.head);

        return i;
    }

    // O(n) Linear Time T(2n)
    display() {
        let current = this.head;
        let result = "";

        do
        {
            result += current.value;
            current = current.next;

            if (current !== this.head)
            {
                result += " -> ";
            }
        } while (current !== this.head);
        
        result += "\n";
        // i++ vs ++i
        current = this.head.prev;
        do
        {
            result += current.value;
            current = current.prev;

            if (current !== this.head.prev) {
                result += " <- ";
            }

        } while (current != this.head.prev);

        console.log(result);
    }
}

function main() {
    let myList = new LinkedList();

    myList.append(24);
    myList.append(48);
    myList.append(96);
    myList.append(100);

    myList.insert(4, 200);
    myList.insert(1, 36);
    myList.insert(4, 98);

    myList.prepend(12);
    myList.prepend(6);

    myList.display();
}

main();