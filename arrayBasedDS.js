class Person {
    constructor() {
        this.name;
        this.age;
        this.height;
    }
}

class ArrayBST {
    constructor() {
        this.a = [];
        this.n = 0;
    }

    resize() {
        let size = this.n;

        if (size == 0) {
            size = 1;
        }

        for (let i = 0; i < size; i++) {
            this.a.push(null);
        }
    }

    right(i) {
        return 2 * i + 2;
    }

    left(i) {
        return 2 * i + 1;
    }

    insert(value) {
        if (this.a.length == this.n) {
            this.resize();
        }

        let i = 0;

        if (!this.a[0]) {
            this.a[0] = value;
        } else {
            while (this.a[i]) {
                if (value < this.a[i]) {
                    i = this.left(i);
                } else {
                    i = this.right(i);
                }

                if (i > this.a.length) {
                    this.resize();
                }
            }
            this.a[i] = value;
        }

        this.n++;
    }

    inOrderDisplay(i = 0) {
        if (i == 0) {
            console.log("\nInorder Display");
        }

        if (i < this.a.length && this.a[i]) {
            this.inOrderDisplay(this.left(i));
            console.log(this.a[i]);
            this.inOrderDisplay(this.right(i));
        }

        if (i == 0) {
            console.log("\nn: " + this.n);
            console.log("Length of a: " + this.a.length);
        }
    }

    /*inOrder(node) {
        inOrder(node.left);
        console.log(node.value);
        inOrder(node.right);
    }*/

    preOrderDisplay(i = 0) {
        if (i == 0) {
            console.log("\nPreorder Display");
        }

        if (i < this.a.length && this.a[i]) {
            console.log(this.a[i]);
            this.preOrderDisplay(this.left(i));
            this.preOrderDisplay(this.right(i));
        }

        if (i == 0) {
            console.log("\nn: " + this.n);
            console.log("Length of a: " + this.a.length);
        }
    }

    postOrderDisplay(i = 0) {
        if (i == 0) {
            console.log("\nPostorder Display");
        }

        if (i < this.a.length && this.a[i]) {
            this.postOrderDisplay(this.right(i));
            this.postOrderDisplay(this.left(i));
            console.log(this.a[i]);
        }

        if (i == 0) {
            console.log("\nn: " + this.n);
            console.log("Length of a: " + this.a.length);
        }
    }

    /*bfs(i = 0) {
        console.log(this.a[i]);

        console.log(this.a[left(i)]);
        console.log(this.a[right(i)]);

        // this.bfs(left(i));

    }*/
}

function main() {
    tree = new ArrayBST();

    tree.insert(4);
    tree.insert(2);
    tree.insert(1);
    tree.insert(6);
    tree.insert(7);
    tree.insert(5);
    // tree.insert(3);

    tree.inOrderDisplay();
    tree.preOrderDisplay();
    tree.postOrderDisplay();
}

main();
