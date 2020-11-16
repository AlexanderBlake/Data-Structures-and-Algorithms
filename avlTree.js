class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    height(node) {
        if (node) {
            return node.height;
        }
        return 0;
    }

    getBalance(node) {
        if (!node) return 0;
        return height(node.left) - height(node.right);
    }

    preOrder(node = null) {
        if (!node) {
            console.log("\nPre-order Traversal");
            node = this.root;
        }

        console.log(node.key);
        if (node.left) this.preOrder(node.left);
        if (node.right) this.preOrder(node.right);
    }

    inOrder(node = null) {
        if (!node) {
            console.log("\nIn-order Traversal");
            node = this.root;
        }

        if (node.left) this.inOrder(node.left);
        console.log(node.key);
        if (node.right) this.inOrder(node.right);
    }

    postOrder(node = null) {
        if (!node) {
            console.log("\nPost-order Traversal");
            node = this.root;
        }

        if (node.left) this.postOrder(node.left);
        if (node.right) this.postOrder(node.right);
        console.log(node.key);
    }

    unBalancedInsert(key) {
        if(!this.root) this.root = new Node(key);

        else {
            let temp = this.root;
            let keepGoing = true;

            while (keepGoing) {
                if (temp.left && temp.key > key) temp = temp.left;
                else if (temp.right && temp.key < key) temp = temp.right;
                else keepGoing = false;
            }

            if (temp.key > key) temp.left = new Node(key);
            else temp.right = new Node(key);
        }
    }

    avlInsert() {

    }
}

function main() {
    tree = new BinarySearchTree();

    tree.unBalancedInsert(12);
    tree.unBalancedInsert(8);
    tree.unBalancedInsert(5);
    tree.unBalancedInsert(4);
    tree.unBalancedInsert(11);
    tree.unBalancedInsert(18);
    tree.unBalancedInsert(17);

    tree.inOrder();
    tree.preOrder();
    tree.postOrder();
}

main();