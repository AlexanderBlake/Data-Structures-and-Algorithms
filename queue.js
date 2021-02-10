class Node {
    constructor(value) {
        this.value = value;
        this.ahead = null;
        this.behind = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    push(value) {
        if (!this.size) {
            this.front = new Node(value);
            this.back = this.front;
        } else {
            let newNode = new Node(value);

            newNode.ahead = this.back;
            this.back.behind = newNode;
            this.back = newNode;
        }

        this.size++;
    }

    pop() {
        if (this.front) {
            let poppedNode = this.front;
            this.front = this.front.behind;
            if (this.front) {
                this.front.ahead = null;
            }
            this.size--;

            if (!this.size) {
                this.front = null;
                this.back = null;
            }

            return poppedNode.value;
        }
        return -1;
    }

    display() {
        if (!this.back) {
            console.log("Queue is empty.");
        } else {
            let walker = this.back;
            let displayString = "(Size: " + this.size + "): ";

            while (walker.ahead) {
                displayString += walker.value + " <-> ";
                walker = walker.ahead;
            }

            console.log(displayString + walker.value);
        }
    }
}

function main() {
    queue = new Queue();
    queue.display();

    queue.push(24);
    queue.push(48);
    queue.push(50);
    queue.display();

    let x = queue.pop();
    console.log(x);
    x = queue.pop();
    console.log(x);
    queue.display();

    queue.pop();
    queue.display();
    queue.pop();
    queue.display();
}

main();
