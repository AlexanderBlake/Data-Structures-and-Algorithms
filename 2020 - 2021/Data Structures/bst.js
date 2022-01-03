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

    insertIter(value) {
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

// Space Complexity: Max = 2n Average = 3n/2 Min = n O(n) Linear Space
// Time Complexity: O(log n) Logarithmetic Time
// Insert: O(log n)
// Search: O(log n)
// Delete: O(log n)
class BSTArray {
    constructor() {
        this.arr = [];
    }

    resize() {
        let size = this.arr.length;
        for (let i = 0; i < size; i++) {
            this.arr.push();
        }
    }

    insert(value) {
        if (!this.arr.length) {
            this.arr.push(value);
        } else {
            let i = 0;

            while (this.arr[i]) {
                if (value < this.arr[i]) {
                    i = 2 * i + 1;
                } else if (value > this.arr[i]) {
                    i = 2 * i + 2;
                }

                if (i >= this.arr.length) {
                    this.resize();
                }
            }
            this.arr[i] = value;
        }
    }
}

function binarySearchChallenge(actual) {
    /*
    tree = new BST();
    for (let i = 1; i <= 100; i++) {
        tree.insert(i);
    }
    */

    let guess = 50;
    let delta = 25;
    let attempts = 1;

    while (guess != actual) {
        // console.log(guess);
        if (guess > actual) {
            guess -= delta;
        } else if (guess < actual) {
            guess += delta;
        }

        delta = Math.round(delta / 2);
        attempts++;
    }

    // console.log(guess);
    // console.log("Attempts:", attempts);
    return attempts;
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
    // tree.preOrderTraversal();

    tree = new BSTArray();
    tree.insert(24);
    tree.insert(48);
    tree.insert(12);
    tree.insert(96);
    tree.insert(18);
    tree.insert(6);
    tree.insert(36);
    // console.log(tree.arr);
    let result;

    for (let i = 1; i <= 100; i++) {
        result = binarySearchChallenge(i);
        if (result > 7) {
            console.log(i);
        }
    }
    
}

main();