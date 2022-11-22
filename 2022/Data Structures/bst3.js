class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(val) {
        let inserted = false;
        let newNode = new Node(val);

        if (this.root === null) {
            this.root = newNode;
        } else {
            let curr = this.root;

            while (!inserted) {
                if (val < curr.val) {
                    if (curr.left) {
                        curr = curr.left;
                    } else {
                        curr.left = newNode;
                        inserted = true;
                    }
                } else {
                    if (curr.right) {
                        curr = curr.right;
                    } else {
                        curr.right = newNode;
                        inserted = !inserted;
                    }
                }
            }
        }
    }

    inorder(curr = this.root) {
        if (curr) {
            this.inorder(curr.left);
            console.log(curr.val);
            this.inorder(curr.right);
        }
    }
}

function main() {
    tree = new BinarySearchTree();

    tree.add(24);
    tree.add(12);
    tree.add(6);
    tree.add(18);
    tree.add(48);
    tree.add(36);
    tree.add(96);

    tree.inorder();
}

main();
