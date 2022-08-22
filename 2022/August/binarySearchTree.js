class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            let current = this.root;
            let keepGoing = true;

            while (keepGoing) {
                if (current.value > value) {
                    if (current.left) {
                        current = current.left;
                    } else {
                        current.left = new Node(value);
                        keepGoing = false;
                    }
                } else if (current.right) {
                    current = current.right;
                } else {
                    current.right = new Node(value);
                    keepGoing = false;
                }
            }
        }
    }

    inOrderTraversal(current = this.root) {
        if (current) {
            this.inOrderTraversal(current.left);
            console.log(current.value);
            this.inOrderTraversal(current.right);
        }
    }
}

function main() {
    let tree = new BinarySearchTree();

    tree.insert(4);
    tree.insert(2);
    tree.insert(6);
    tree.insert(1);
    tree.insert(3);
    tree.insert(5);
    tree.insert(8);

    tree.inOrderTraversal();
}

main();
