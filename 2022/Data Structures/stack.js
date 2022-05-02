class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.bottom = null;
        this.top = null;
        this.size = 0;
    }

    push(value) {
        let myNode = new Node(value);

        if (this.top) {
            this.top.next = myNode;
        } else {
            this.bottom = myNode
        } 

        myNode.prev = this.top;
        this.top = myNode;
        this.size++;
    }

    pop() {
        let poppedValue = null;

        if (!this.isEmpty()) {
            poppedValue = this.top.value;
            this.top = this.top.prev;  

            if (this.size !== 1) {
                this.top.next = null;
            } else {
                this.bottom = null;
            }

            this.size--;
        }

        return poppedValue;   
    }

    isEmpty() {
        return this.size === 0;
    }

    // Empty
    // 24 -> 48 -> 96 -> 100
    // [Top] 100 <-> 96 <- 48 -> 24 [Bottom]
    /*
    display() {
        let myString = "[Top] ";

        if (this.isEmpty()) {
            console.log("Empty");
        } else {
            let current = this.top;

            while (current !== this.bottom) {
                myString += current.value + " <-> ";
                current = current.prev;
            }

            console.log(myString + current.value + " [Bottom]");
        }
    }
    */

    display(current = this.top, myString = "[Top] ") {
        if (this.isEmpty()) {
            console.log("Empty");
        } else if (current === this.bottom) {
            console.log(myString + current.value + " [Bottom]");
        } else {
            this.display(current.prev, myString + current.value + " <-> ");
        }
    }
}

function main() {
    let myStack = new Stack();
    myStack.display();

    myStack.push(24);
    myStack.push(48);
    myStack.push(96);
    myStack.push(100);
    myStack.display();

    console.log(myStack.pop());
    console.log(myStack.pop());
    myStack.display();

    myStack.push(12);
    myStack.push(6);
    myStack.push(3);
    myStack.display();

    while (!myStack.isEmpty()) {
        console.log(myStack.pop());
    }

    myStack.display();
}

main();