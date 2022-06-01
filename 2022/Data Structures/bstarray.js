class BinarySearchTree {
    constructor() {
        this.arr = [];

        for (let i = 0; i < 7; i++) {
            this.arr.push(null);
        }
    }

    left(currentIndex) {
        return 2 * currentIndex + 1;
    }

    right(currentIndex) {
        return 2 * currentIndex + 2;
    }

    parent(currentIndex) {
        return Math.floor((currentIndex - 1) / 2);
    }

    breadthfirstTraversal() {
        for (let i = 0; i < this.arr.length; i++) {
            console.log(this.arr[i]);
        }
    }

    preorderTraversal(currentIndex = 0) {
        if (currentIndex < this.arr.length && this.arr[currentIndex]) {
            console.log(this.arr[currentIndex]);
            this.preorderTraversal(this.left(currentIndex));
            this.preorderTraversal(this.right(currentIndex));
        }
    }

    inorderTraversal(currentIndex = 0) {
        if (currentIndex < this.arr.length && this.arr[currentIndex]) {
            this.inorderTraversal(this.left(currentIndex));
            console.log(this.arr[currentIndex]);
            this.inorderTraversal(this.right(currentIndex));
        }
    }

    postorderTraversal(currentIndex = 0) {
        if (currentIndex < this.arr.length && this.arr[currentIndex]) {
            this.postorderTraversal(this.left(currentIndex));
            this.postorderTraversal(this.right(currentIndex));
            console.log(this.arr[currentIndex]);
            
        }
    }

    insert(value) {
        let next;
        let inserted = false;
        let currentIndex = 0;

        if (!this.arr[0]) {
            this.arr[0] = value;
        } else {
            while (!inserted) {
                if (value < this.arr[currentIndex]) {
                    next = this.left(currentIndex);

                    if (this.arr[next]) {
                        currentIndex = next;
                    } else {
                        this.arr[next] = value;
                        inserted = true;
                    }
                    
                } else {
                    next = this.right(currentIndex);

                    if (this.arr[next]) {
                        currentIndex = next;
                    } else {
                        this.arr[next] = value;
                        inserted = true;
                    }
                }
            }
        }
    }
}

function main() {
    let tree = new BinarySearchTree();

    tree.insert(24);
    tree.insert(12);
    tree.insert(48);
    tree.insert(6);
    tree.insert(18);
    tree.insert(36);
    tree.insert(96);

    // console.log(tree);

    tree.postorderTraversal();

    /*
    console.log(tree.parent(5));
    console.log(tree.parent(4));
    console.log(tree.parent(2));
    */
}

main();