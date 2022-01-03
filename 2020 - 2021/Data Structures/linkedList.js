class Node {
    constructor(value) {
        this.value = value;
        this.forward = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    pushFront(value) {
        if (!this.head) {
            this.head = new Node(value);
            this.tail = this.head;
        } else {
            let newNode = new Node(value);
            newNode.forward = this.head;
            this.head = newNode;
        }
    }

    pushEnd(value) {
        if (!this.head) {
            this.pushFront(value);
        } else {
            this.tail.forward = new Node(value);
            this.tail = this.tail.forward;
        }
    }

    insertInOrder(value) {
        if (!this.head || this.head.value > value) {
            this.pushFront(value);
        } else if (this.tail.value < value) {
            this.pushEnd(value);
        } else {
            let newNode;
            let walker = this.head;

            while (walker.forward && walker.forward.value < value) {
                walker = walker.forward;
            }

            newNode = new Node(value);
            newNode.forward = walker.forward;
            walker.forward = newNode;
        }
    }

    popFront() {
        let poppedNode = this.head;
        this.head = this.head.forward;

        poppedNode.value = 0;
        poppedNode.forward = null;
    }

    delete(value) {
        if (this.head) {
            if (this.head.value == value) {
                this.popFront();
            } else {
                let walker = this.head;

                while (walker.forward != this.tail && walker.forward.value < value) {
                    walker = walker.forward;
                }

                if (walker.forward.value == value) {
                    let deletedNode = walker.forward;
                    walker.forward = walker.forward.forward;

                    deletedNode.value = 0;
                    deletedNode.forward = null;
                }
            }
        }
     }

    printList() {
        let myString = "Empty List";

        if (this.head) {
            myString = "";
            let walker = this.head;

            while (walker.forward) {
                myString += walker.value + " -> ";
                walker = walker.forward;
            }

            myString += walker.value;
        }
        console.log(myString);
    }
}

function main() {
    myList = new LinkedList();
    myList.printList();

    myList.insertInOrder(24);
    myList.insertInOrder(48);
    myList.insertInOrder(72);
    myList.insertInOrder(12);
    myList.insertInOrder(36);
    myList.insertInOrder(6);
    myList.insertInOrder(90);
    myList.insertInOrder(100);
    myList.insertInOrder(3);

    myList.delete(110);
    myList.delete(36);
    myList.delete(3);
    myList.delete(6);
    myList.delete(100);
    myList.delete(90);

    myList.printList();
}

main();