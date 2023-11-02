class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        if (!this.top) {
            this.top = new Node(value);
        } else {
            let newNode = new Node(value);
            newNode.next = this.top;
            this.top = newNode;
        }

        this.size++;
    }

    pop() {
        if (this.size > 0) {
            let poppedNode = this.top;
            this.top = this.top.next;

            this.size--;
            return poppedNode.value;
        }

        return -1;
    }

    /* peek() {
        return this.top.value;
    } */

    display() {
        if (!this.top) {
            console.log("Stack is empty.");
        } else {
            let walker = this.top;
            let displayString = "(Size: " + this.size + "): ";

            while (walker.next) {
                displayString += walker.value + " -> ";
                walker = walker.next;
            }

            console.log(displayString + walker.value);
        }
    }
}

function main() {
    stack = new Stack();
    stack.display();

    let counter = 1;
    /*while (true) {
        console.log(counter++);
        stack.push(1);
    }*/

    stack.push(24);
    stack.push(48);
    stack.push(50);
    stack.display();

    let x = stack.pop();
    stack.display();
    console.log(x);

    stack.pop();
    stack.pop();
    stack.display();
}

main();

/*function main(num) {
    console.log(num);
    main(++num);
}

main(1);
*/
