class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(val) {
        let curr = this.head;
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            while (curr.next) {
                curr = curr.next;
            }

            curr.next = new Node(val);
        }
    }

    display() {
        let curr = this.head;

        while (curr) {
            console.log(curr.val);
            curr = curr.next;
        }
    }
}

function main() {
    ll = new SinglyLinkedList();

    ll.add(24);
    ll.add(48);
    ll.add(96);
    ll.add(100);

    ll.display();
}

main();
