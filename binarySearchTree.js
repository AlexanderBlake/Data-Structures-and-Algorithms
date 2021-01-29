class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(premade = false) {
        this.root = null;

        if (premade) {
            this.addIterably(4);
            this.addIterably(2);
            this.addIterably(1);
            this.addIterably(3);
            this.addIterably(6);
            this.addIterably(5);
            this.addIterably(7);
        }
    }

    addIterably(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            let walker = this.root;

            while (walker.left || walker.right) {
                if (value < walker.value && walker.left) {
                    walker = walker.left;
                } else if (value > walker.value && walker.right) {
                    walker = walker.right;
                } else {
                    break;
                }
            }

            if (value < walker.value) {
                walker.left = new Node(value);
            } else  {
                walker.right = new Node(value);
            }
        }
    }

    inOrderTraversal(node = null) {
        if (node == null) {
            node = this.root;
            console.log("In Order Traversal");
        }

        if (node.left) {
            this.inOrderTraversal(node.left);
        }

        console.log(node.value);

        if (node.right) {
            this.inOrderTraversal(node.right);
        }
    }

    preOrderTraversal(node = null) {
        if (node == null) {
            node = this.root;
            console.log("Pre Order Traversal");
        }

        console.log(node.value);
        if (node.left) {
            this.preOrderTraversal(node.left);
        }

        if (node.right) {
            this.preOrderTraversal(node.right);
        }
    }

    postOrderTraversal(node = null) {
        if (node == null) {
            node = this.root;
            console.log("Post Order Traversal");
        }

        if (node.left) {
            this.postOrderTraversal(node.left);
        }

        if (node.right) {
            this.postOrderTraversal(node.right);
        }

        console.log(node.value);
    }


    /*
    add(a, b = a) {
        return a + b;
    } 

    add (a) {
        return a + a;
    }
    */
}

function main() {
    premade = new BinarySearchTree(true);
    custom = new BinarySearchTree();

    premade.postOrderTraversal();

    /*
    console.log(tree.add(2 ,3));
    console.log(tree.add(3));
    */
}

main();
