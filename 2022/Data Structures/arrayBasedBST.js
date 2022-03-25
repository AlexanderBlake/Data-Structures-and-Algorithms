class BinarySearchTree {
    constructor() {
        this.arr = [];
    }

    left(index) {
        return (index * 2) + 1;
    }

    right(index) {
        return (index * 2) + 2;
    }

    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    increaseSize() {
        let val = Math.log2(this.arr.length + 1);

        if (val % 2 === 0) {
            for (let i = 0; i < 2 ** val; i++) {
                this.arr.push(null);
            }
        }
    }

    insert(value) {
        if (this.arr.length === 0) {
            this.arr.push(value);
        } else {
            this.increaseSize();
            let index = 0;

            while (this.arr[index]) {
                if (this.arr[index] > value) {
                    index = this.left(index);
                } else {
                    index = this.right(index);
                }
            }

            this.arr[index] = value;
        }
    }

    bfsTraversal() {
        console.log(this.arr);
    }

    preorderTraversal(index = 0) {
        if (this.arr[index]) {
            console.log(this.arr[index]);
            this.preorderTraversal(this.left(index));
            this.preorderTraversal(this.right(index));
        }
    }

    // Left, Print, Right
    inorderTraversal(index = 0) {
        if (this.arr[index]) {
            this.inorderTraversal(this.left(index));
            console.log(this.arr[index]);
            this.inorderTraversal(this.right(index));
        }
    }

    postorderTraversal(index = 0) {
        if (this.arr[index]) {
            this.postorderTraversal(this.left(index));
            this.postorderTraversal(this.right(index));
            console.log(this.arr[index]);
        }
    }
}

function main() {
    tree = new BinarySearchTree();

    tree.insert(24);
    tree.insert(12);
    
    tree.insert(18);
    tree.insert(6);
    tree.insert(48);
    tree.insert(96);
    tree.insert(36);

    // tree.bfsTraversal();
    tree.inorderTraversal();
}

main();