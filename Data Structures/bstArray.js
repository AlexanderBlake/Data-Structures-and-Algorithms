class BinarySearchTree {
    constructor() {
        this.tree = [];
    }

    left(index) {
        return 2 * index + 1;
    }

    right(index) {
        return (index + 1) * 2;
    }

    findParent(index) {
        return Math.round(index / 2) - 1;
    }

    unBalancedInsert(value) {
        if (this.tree.length == 0) {
            this.tree.push(value);
        }
        else {
            let i = 0;

            while (i < this.tree.length && this.tree[i] != null) {
                if (value < this.tree[i]) {
                    i = this.left(i);
                } else {
                    i = this.right(i);
                }
            }

            if (i >= this.tree.length) {
                let end = 2 * (this.tree.length + 1);
                for (let j = 0; j < end; j++) {
                    this.tree.push(null);
                }
            }
            this.tree[i] = value;
        }

    }

    dfsinOrder(index = -1) {
        if (index == -1) {
            index = 0;
        } else if (index >= this.tree.length || !this.tree[index]) {
            return;
        }

        this.dfsinOrder(this.left(index));
        console.log(this.tree[index]);
        this.dfsinOrder(this.right(index));
    }

    dfsPreOrder(index = -1) {
        if (index == -1) {
            index = 0;
        } else if (index >= this.tree.length || !this.tree[index]) {
            return;
        }

        console.log(this.tree[index]);
        this.dfsinOrder(this.left(index));
        this.dfsinOrder(this.right(index));
    }

    dfsPostOrder(index = -1) {
       if (index == -1) {
            index = 0;
        } else if (index >= this.tree.length || !this.tree[index]) {
            return;
        }
        
        this.dfsinOrder(this.left(index));
        this.dfsinOrder(this.right(index));
        console.log(this.tree[index]);
    }

    bfsTraversal() {
        let myString = "BFS Traversal: ";

        for (let i = 0; i < this.tree.length; i++){
            if (this.tree[i]) {
                myString += this.tree[i].toString() + " ";
            } else {
                myString += "null ";
            }
        }

        console.log(myString);
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

    tree.bfsTraversal();
    tree.dfsinOrder();
    /*tree.dfsPreOrder();
    tree.dfsPostOrder();*/
}

main();
