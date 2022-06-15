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
        let newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            let isInserted = false; 

            while (!isInserted) {
                if (value < current.value) {
                    if (current.left) {
                        current = current.left;
                    } else {
                        current.left = newNode;
                        isInserted = true;
                    } 
                } else if (current.right) {
                    current = current.right
                } else {
                    current.right = newNode;
                    isInserted = true;
                }
            }
        }
    }

    inOrder(current = this.root) {
        if (current) {
            this.inOrder(current.left);
            console.log(current.value);
            this.inOrder(current.right);
        }
    }
}

function main() {
    tree = new Tree();

    tree.insert(41);
    tree.insert(20);
    tree.insert(11);
    tree.insert(29);
    tree.insert(32);
    tree.insert(65);
    tree.insert(50);
    tree.insert(91);
    tree.insert(72);
    tree.insert(99);

    tree.inOrder();
}

main();
