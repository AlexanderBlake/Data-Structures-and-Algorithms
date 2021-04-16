class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
        }
        else {
            let walker = this.root;

            while (walker) {
                if (value < walker.value) {
                    if (walker.left) {
                        walker = walker.left;
                    } else {
                        walker.left = new Node(value);
                    }
                } else (value > walker.value) {
                    if (walker.right) {
                        walker = walker.right;
                    } else {
                        walker.right = new Node(value);
                    }
                }
            }
        }
    }

    preOrderTraversal() {
        return;
    }

    postOrderTraversal() {
        return;
    }

    inOrderTraversal() {
        return;
    }
}