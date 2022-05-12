class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let notInserted = true;
        let current = this.root;

        if (!this.root) {
            this.root = new Node(value);
        } else {
            do {
                if (value < current.value) {
                    if (current.left) {
                        current = current.left;
                    } else {
                        current.left = new Node(value);
                        notInserted = false;
                    }
                } else if (current.right) {
                    current = current.right;
                } else {
                    current.right = new Node(value);
                    notInserted = false;
                }
            } while (notInserted);
        }
    }

    inOrderTraversal(current = this.root) {
        if (current) {
            this.inOrderTraversal(current.left);
            console.log(current.value);
            this.inOrderTraversal(current.right);
        }
    }

    preOrderTraversal(current = this.root) {
        if (current) {
            console.log(current.value);
            this.inOrderTraversal(current.left);
            this.inOrderTraversal(current.right);
        }
    }

    postOrderTraversal(current = this.root) {
        if (current) {
            this.inOrderTraversal(current.left);
            this.inOrderTraversal(current.right);
            console.log(current.value);
        }
    }
}

function main() {
    tree = new Tree();

    tree.insert(24);
    tree.insert(48);
    tree.insert(12);
    tree.insert(6);
    tree.insert(18);
    tree.insert(96);
    tree.insert(36);

    tree.inOrderTraversal();
}

main();
