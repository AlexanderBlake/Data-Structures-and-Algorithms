class Node {
    constructor(value) {
        this.value = value;
        this.forward = null;
        this.back = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Return true upon success else false
    push(value) {
        if (!this.head) {
            this.head = new Node(value);
            this.head.forward = this.head;
            this.head.back = this.head;
        } else if (this.head.back.value < value) {
            let temp = this.head.back;

            temp.forward = new Node(value);
            temp.forward.back = temp;
            temp.forward.forward = this.head;

            this.head.back = temp.forward;
        } else {
            return false;
        }

        this.size++;
        return true;
    }

    pop() {
        if (!this.head) {
            return false;
        }

        let temp = this.head.back;

        if (temp == this.head) {
            this.head = null;
        } else {
            temp.back.forward = temp.forward;
            temp.forward.back = temp.back;
            delete this.temp;
        }
        this.size--;
        return true;
    }

    // Return true upon success else false
    insert(value) {
        if (!this.head) {
            return this.push(value);
        }
        else {
           let temp = this.head;
            while (temp.forward.value > temp.value && value > temp.forward.value) {
                temp = temp.forward;
            }
            temp.forward = new Node(value);
            temp.forward.back = temp;
            temp.forward.forward = this.head;
        }
        this.size++;
        return true;
    }

    // Return true upon success else false
    delete(value) {
        if (this.head.back === this.head && this.head.value === value) {
            this.head = null;
        } else {
            let temp = this.head;

            while (temp.value !== value) {
                if (temp.forward.value <= temp.value) {
                    return false;
                }
                temp = temp.forward;
            }

            temp.back.forward = temp.forward;
            temp.forward.back = temp.back;

            if (temp === this.head) {
                this.head = temp.forward;
            }

            delete this.temp;
        }
        this.size--;
        return true;
    }

    display() {
        let outputString = "";

        if (this.head === null) {
            outputString = "No Nodes";
        } else {
            let temp = this.head;
            
            while (temp.forward.value > temp.value) {
                outputString += temp.value.toString() + " <-> ";
                temp = temp.forward;
            }
            outputString += temp.value.toString() + " <-> " + temp.forward.value.toString();
        }
        console.log(outputString);
    }

    displayRecursively(node = null) {
        if (!node) {
            node = this.head;
        }

        console.log(node.value);

        if (node.forward.value > node.value) {
            this.displayRecursively(node.forward);
        }
    }
}

function main() {
    ll = new LinkedList();

    console.log(ll.push(24));
    console.log(ll.push(48));
    console.log(ll.push(96));
    console.log(ll.push(1));
    console.log(ll.push(96));
    ll.display();

    console.log(ll.delete(48));
    console.log(ll.delete(24));
    console.log(ll.delete(1));
    console.log(ll.delete(96));
    ll.display();


    console.log(ll.push(3));
    console.log(ll.push(5));
    console.log(ll.push(10));
    ll.display();

    console.log(ll.pop());
    console.log(ll.pop());
    console.log(ll.pop());
    console.log(ll.pop());
    ll.display();

    console.log(ll.insert(3));
    console.log(ll.insert(5));
    console.log(ll.insert(10));
    console.log(ll.insert(7));
    ll.display();
}

main();
