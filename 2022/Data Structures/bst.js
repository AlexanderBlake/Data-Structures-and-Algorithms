class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Queue {
    constructor(value) {
        this.arr = [value];
    }

    enqueue(value) {
        this.arr.push(value);
    }

    dequeue() {
        return this.arr.shift();
    }

    isEmpty() {
        return this.arr.length === 0;
    }
}

class Tree {
    constructor(value) {
        this.root = new Node(value);
    }

    insert(value) {
        let keepGoing = true;
        let current = this.root;

        while (keepGoing) {
            if (current.value < value) {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = new Node(value);
                    keepGoing = false;
                }
            } else if (current.left) {
                current = current.left;
            } else {
                current.left = new Node(value);
                keepGoing = false;
            }
        }
    }

    inorderTraversal(current = this.root) {
        if (current) {
            this.inorderTraversal(current.left);
            console.log(current.value);
            this.inorderTraversal(current.right);
        }
    }

    // 24, 12, 6, 18, 48, 36, 96
    preorderTraversal(current = this.root) {
        if (current !== null) {
            console.log(current.value);
            this.preorderTraversal(current.left);
            this.preorderTraversal(current.right);
        }
    }

    // 6, 18, 12, 36, 96, 48, 24
    postorderTraversal(current = this.root) {
        if (current !== null) {
            this.postorderTraversal(current.left);
            this.postorderTraversal(current.right);
            console.log(current.value);
        }
    }

    breadthFirstTraversal() {
        let current;
        let myQ = new Queue(this.root);

        while (!myQ.isEmpty()) {
            current = myQ.dequeue();

            if (current.left) {
                myQ.enqueue(current.left);
            }
            if (current.right) {
                myQ.enqueue(current.right);
            }
            console.log(current.value);
        }
    }
}

function main() {
    let tree = new Tree(24);

    tree.insert(12);
    tree.insert(48);
    tree.insert(6);
    tree.insert(18);
    tree.insert(36);
    tree.insert(96);

    tree.breadthFirstTraversal();
}

main();