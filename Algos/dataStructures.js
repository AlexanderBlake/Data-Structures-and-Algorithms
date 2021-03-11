class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Time Complexity w/o Tail: O(n)
    // Time Complexity w/Tail: O(1)
    push(value) {
        if (!this.head) {
            this.head = new Node(value);
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = new Node(value);
        }

        this.size++;
    }

    pop() {
        if (this.head) {
            let currentNode = this.head;

            while (currentNode.next.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = null;
            delete currentNode.next;

            this.size--;
        }
    }

    // Time Complexity: O(n / 2) = O(n) Linear Time
    insert(index, value) {
        if (index < this.size && index >= 0) {
            if (index == 0) {
                let newNode = new Node(value);
                newNode.next = this.head;
                this.head = newNode;
            } else if (index == this.size - 1) {
                this.push(value);
            } else {
                let currentNode = this.head;

                for (let i = 0; i < index - 1; i++) {
                    currentNode = currentNode.next;
                }

                let newNode = new Node(value);
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            }

            this.size++;
            return true;
        }
        return false;
    }

    // Time Complexity: O(n / 2) = O(n) Linear Time
    remove(index) {
        if (index < this.size && index >= 0) {
            if (index == 0) {
                let removedNode = this.head;
                this.head = this.head.next;
                removedNode = null;
            } else if (index == this.size - 1) {
                this.pop();
            } else {
                let currentNode = this.head;

                for (let i = 0; i < index - 1; i++) {
                    currentNode = currentNode.next;
                }

                let removedNode = currentNode.next;
                currentNode.next = currentNode.next.next;
                removedNode = null;
            }

            this.size--;
            return true;
        }
        return false;
    }

    // Time Complexity: O(n)
    display() {
        let myString = "";

        let currentNode = this.head;

        while (currentNode.next) {
            myString += currentNode.value + " -> ";
            currentNode = currentNode.next;
        }

        console.log(myString + currentNode.value);
    }
}

function main() {
    singlyLinkedList = new LinkedList();

    singlyLinkedList.push(24);
    singlyLinkedList.push(12);
    singlyLinkedList.push(48);
    singlyLinkedList.push(96);
    singlyLinkedList.insert(0, 5);
    singlyLinkedList.insert(3, 15);
    singlyLinkedList.insert(singlyLinkedList.size - 1, 100);
    singlyLinkedList.insert(singlyLinkedList.size - 2, -5);
    console.log(singlyLinkedList.insert(singlyLinkedList.size, 9999));
    singlyLinkedList.pop();
    singlyLinkedList.remove(0);
    singlyLinkedList.remove(singlyLinkedList.size - 1);
    singlyLinkedList.remove(2);
    singlyLinkedList.display();

    /*
    console.log("FOR LOOP");
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log("\nWHILE LOOP");
    let i = 0;
    while (i < 5) {
        console.log(i++);
    }

    console.log("\nDO-WHILE LOOP");
    i = 0;
    do {
        console.log(i++);
    } while (i < 5);
    */
}

main();
