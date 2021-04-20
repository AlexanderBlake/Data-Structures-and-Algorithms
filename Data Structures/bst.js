class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Space Complexity: O(n) Linear Space
// Time Complexity: O(log n) Logarithmetic Time
// Insert: O(log n)
// Search: O(log n)
// Delete: O(log n)

class BST {
    constructor() {
        this.root = null;
    }

    /*
    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            let walker = this.root;

            while (walker) {
                if (value < walker.value) {
                    if (walker.left) {
                        walker = walker.left;
                    } else {
                        walker.left = new Node(value);
                        break;
                    }
                } else if (value > walker.value) {
                    if (walker.right) {
                        walker = walker.right;
                    } else {
                        walker.right = new Node(value);
                        break;
                    }
                }
            }
        }
    }
    */

    insert(value, node = null) {
        if (node == null) {
            if (!this.root) {
                this.root = new Node(value);
            }
            node = this.root;
        }

        if (value < node.value) {
            if (node.left) {
                this.insert(value, node.left);
            } else {
                node.left = new Node(value);
            }
        } else if (value > node.value) {
            if (node.right) {
                this.insert(value, node.right);
            } else {
                node.right = new Node(value);
            }
        }
    }

    postOrderTraversal(node = null) {
        if (node == null) {
            node = this.root;
        }

        if (node.left) {
            this.postOrderTraversal(node.left);
        }

        if (node.right) {
            this.postOrderTraversal(node.right);
        }

        console.log(node.value);
    }

    preOrderTraversal(node = null) {
        if (node == null) {
            node = this.root;
        }

        console.log(node.value);

        if (node.left) {
            this.preOrderTraversal(node.left);
        }

        if (node.right) {
            this.preOrderTraversal(node.right);
        }
    }

    // Depth - First Traversal (DFS: Depth First Search)
    inOrderTraversal(node = null) {
        if (node == null) {
            node = this.root;
        }

        if (node.left) {
            this.inOrderTraversal(node.left);
        }

        console.log(node.value);

        if (node.right) {
            this.inOrderTraversal(node.right);
        }
    }
}

function main() {
    tree = new BST();
    tree.insert(24);
    tree.insert(48);
    tree.insert(12);
    tree.insert(96);
    tree.insert(18);
    tree.insert(6);
    tree.insert(36);

    // console.log(tree);
    // tree.inOrderTraversal();
    // tree.postOrderTraversal();
    tree.preOrderTraversal();
}

main();