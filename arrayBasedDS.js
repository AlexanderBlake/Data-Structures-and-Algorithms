class Person {
    constructor() {
        this.name;
        this.age;
        this.height;
    }
}

class ArrayQueue {
    constructor() {
        this.a = [];
        this.n = 0;
        this.j = 0;
    }

    resize() {
        let size = this.n;

        if (size == 0) {
            size = 1;
        }

        for (let i = 0; i < size; i++) {
            this.a.push(null);
        }

        if (this.j != 0) {
            let temp;
            for (let i = 0; i < size; i++) {
                temp = this.a[i];
                this.a[i] = this.a[this.j];
                this.a[this.j] = temp;
            }
            this.j = 0;
        }
    }

    push(value) {
        if (this.n == this.a.length) {
            this.resize();
        }
        this.a[(this.j + this.n) % this.a.length] = value;
        this.n += 1;
    }

    pop() {
        let poppedValue = this.a[this.j];
        this.a[this.j] = null;
        this.j = (this.j + 1) % this.a.length;
        this.n -= 1;
        return poppedValue;
    }

    display() {
        let displayString = "n: " + this.n + ", a.length: " + this.a.length + ", j: " + this.j + "\n[";

        for (let i = 0; i < this.n - 1; i++) {
            displayString += this.a[(i + this.j) % this.a.length] + ", ";
        }
        console.log(displayString + this.a[(this.j + this.n - 1) % this.a.length] + "]\n");
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
    /*tree = new ArrayBST();

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
    */

    queue = new ArrayQueue();

    /*queue.push(12);
    queue.push(20);
    queue.push(48);
    queue.push(24);
    queue.display();
    // console.log(queue.a, "\n");

    queue.pop();
    queue.display();
    // console.log(queue.a, "\n");

    queue.push(50);
    queue.display();
    // console.log(queue.a, "\n");

    queue.push(100);

    queue.display();
    console.log(queue.a, "\n");*/

    queue.push(20);
    queue.push(48);
    queue.pop();
    queue.push(24);
    queue.push(50);
    queue.display();
    console.log(queue.a, "\n")

    queue.push(1000);
    queue.display();
    console.log(queue.a, "\n");

    queue.pop();
    queue.pop();
    queue.pop();
    queue.push(800);
    queue.push(700);
    queue.push(500);
    queue.display();
    console.log(queue.a, "\n");

    queue.push(-24);
    queue.display();
    console.log(queue.a, "\n");

}

main();
