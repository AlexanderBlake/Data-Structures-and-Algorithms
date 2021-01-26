class PersonNode {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.next = null;
    }

    // Getters and Setters
    // Accessors and Mutators
    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getNext() {
        return this.next;
    }

    setNext(next) {
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    findParent(name) {
        if (name == this.head.getName()) {
            return null;
        }

        let walker = this.head;
        while (walker.getNext().getName() != name) {
            walker = walker.getNext();
        }

        return walker;
    }

    push(name, age) {
        if (!this.head) {
            this.head = new PersonNode(name, age);
            this.tail = this.head;
        } else {
            this.tail.setNext(new PersonNode(name, age));
            this.tail = this.tail.getNext();
        }
    }

    delete(name) {
        if (this.head) {
            let parent = this.findParent(name);
            let deletedNode;

            if (parent) {            
                deletedNode = parent.getNext();
                parent.setNext(parent.getNext().getNext());
            } else {
                deletedNode = this.head;
                this.head = this.head.getNext();
            }

            deletedNode.name = null;
            deletedNode.age = null;
            deletedNode.next = null;
            deletedNode = null;
        }
    }

    pop() {
        this.delete(this.tail);
    }

    displayNames() {
        if (!this.head) {
            console.log("<Empty Linked List>");
        } else {
            let walker = this.head;
            let displayString = "";

            while (walker.getNext()) {
                displayString += walker.getName() + " -> ";
                walker = walker.getNext();
            }

            console.log(displayString + walker.getName());
        }
    }
}

function main() {
    /*
    obj = new Person("Alex", 25);

    console.log(obj.getName());
    console.log(obj.getAge());
    */

    ll = new SinglyLinkedList();
    ll.displayNames();

    ll.push("Alex", 28);
    ll.push("Blake", 35);
    ll.push("Charlie", 18);
    ll.push("Dana", 20);
    ll.push("Echo", 40);
    ll.push("Foxtrot", 30);

    // console.log(ll.head.getName());
    // console.log(ll.tail.getName());

    // ll.pop();

    ll.delete("Echo");
    ll.delete("Charlie");
    ll.delete("Foxtrot");
    ll.delete("Alex");

    ll.displayNames();
}

main();
