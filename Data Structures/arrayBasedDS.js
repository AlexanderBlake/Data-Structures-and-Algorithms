class Person {
    constructor() {
        this.name;
        this.age;
        this.height;
    }
}

class ArrayStack {
    constructor() {
        this.a = [];
        this.n = 0;
        this.overflowLimit = 1024;
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

    push(value) {
        if (this.n == this.overflowLimit) {
            console.log("Stack cannot push in " + value + ". It will cause an overflow.");
        } else {
            if (this.n == this.a.length) {
                this.resize();
            }
            this.a[this.n++] = value;
        }
    }

    pop() {
        if (this.n) {
            let poppedValue = this.a[this.n];
            this.a[this.n--] = null;

            return poppedValue;
        }
        return null;
    }

    display() {
        let displayString = "Stack is Empty";

        if (this.n) {
            displayString = "[";
            for (let i = 0; i < this.n - 1; i++) {
                displayString += this.a[i] + ", ";
            }
            displayString += this.a[this.n - 1] + "]";
        }

        console.log(displayString);
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

function testBST() {
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

function testQueue() {
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

function testStack() {
    stack = new ArrayStack();
    stack.display();

    stack.push(24);
    stack.push(12);
    stack.push(48);
    stack.display();

    stack.pop();
    stack.display();

    stack.pop();
    stack.pop();
    stack.display();
    stack.pop();
    stack.display();

    for (let i = 1; i <= 1025; i++) {
        stack.push(i);
    }
}

// You can only trade if you have a full week of trading data
// You start with $1,000
// You cannot transact on worthless equities
// You can do multiple transaction in a day
// You can only buy in whole share increments
// You can only hold long positions (you want the stock to go up)
// Return 0 if you there is an error in the dataset or you couldn't make any money
function maximizeLongProfit(a) {
    let start = 1000;
    let bankroll = 1000;
    let positions = 0;
    if(a.length == 5) {
        
        for(let i = 0; i < a.length; i ++) {
            if(a[i] != 0) {
                let currentPrice = a[i];
                if(currentPrice < a[i+1]) {
                    buy(Math.floor(bankroll / currentPrice),currentPrice);
                } else if (currentPrice > a[i+1]) {
                    sell(positions, currentPrice);
                }
            } else {
                return 0;
            }
            console.log("Bankroll: $" + bankroll);
        }
        if(positions){
            sell(positions, a[a.length-1]);
        }
    }
    return bankroll - start;

    function sell(count, price) {
        positions = positions - count;
        bankroll = bankroll + (count * price);
    }
    function buy(count , price) {
        if(count * price <= bankroll) {
            positions = positions + count;

            bankroll = bankroll - (count * price);
        }
    }
}

// You can only trade if you have a full week of trading data
// You cannot hold more than 1 share
// You start with $1000
// You can do multiple transaction in a day
// You cannot transact on worthless equities
// You can only buy in whole share increments
// You can only hold short positions (you want the stock to go down)
// Borrowing Fee of $10 per day unless you do not have any positions
// Return 0 if you there is an error in the dataset or you couldn't make any money
function maximizeShortProfit(a) {
    let start = 1000;
    let bankroll = 1000;
    let positions = 0;
    if(a.length == 5) {
        
        for(let i = 0; i < a.length; i ++) {
            if(a[i] != 0) {
                let currentPrice = a[i];

                if (positions) {
                    bankroll -= positions * currentPrice;
                    positions = 0;
                }

                if(currentPrice > a[i+1] + 10) {
                    // sell(Math.floor(bankroll / currentPrice), currentPrice);

                    positions += Math.floor(bankroll / currentPrice);
                    bankroll += Math.floor(bankroll / currentPrice) * currentPrice;
                    
                    bankroll -= 10;
                }
            } else {
                return 0;
            }
            // console.log("Bankroll: $" + bankroll);
        }
        if(positions){
            sell(positions, a[a.length-1]);
        }
    }
    return bankroll - start;

    function sell(count, price) {
        positions = positions - count;
        bankroll = bankroll + (count * price);
    }
    function buy(count , price) {
        if(count * price <= bankroll) {
            positions = positions + count;

            bankroll = bankroll - (count * price);
        }
    }
}

// You can only trade if you have a full week of trading data
// You can start with $1,000
// You can do multiple transaction in a day
// You cannot transact on worthless equities
// You can only buy in whole share increments
// You can only hold long/short positions (you want the stock to go up/down)
// Commision Fees: $5 per transaction open or close (long or short)
// Return 0 if you there is an error in the dataset or you couldn't make any money
function maximizeProfit(a) {
    return 0;
}

function main() {
    // testBST();
    // testQueue();
    // testStack();

    /*
    console.log(maximizeLongProfit([]));
    console.log(maximizeLongProfit([0, 0, 0, 0]));
    console.log(maximizeLongProfit([0, 0, 0, 0, 0]));
    console.log(maximizeLongProfit([100, 100, 100, 100, 100]));

    console.log(maximizeLongProfit([1, 100, 1, 100, 1]));
    console.log(maximizeLongProfit([24, 12, 48, 100, 72]));
    console.log(maximizeLongProfit([12, 24, 72, 48, 100]));
    console.log(maximizeLongProfit([100, 72, 48, 24, 12]));
    */

    console.log(maximizeShortProfit([]));
    console.log(maximizeShortProfit([0, 0, 0, 0]));
    console.log(maximizeShortProfit([0, 0, 0, 0, 0]));
    console.log(maximizeShortProfit([100, 100, 100, 100, 100]));
    console.log(maximizeShortProfit([1, 100, 1, 100, 1]));
    console.log(maximizeShortProfit([24, 12, 48, 100, 72]));
    console.log(maximizeShortProfit([12, 24, 72, 48, 100]));
    console.log(maximizeShortProfit([100, 72, 48, 24, 12]));

    /*
    console.log(maximizeProfit([]));
    console.log(maximizeProfit([0, 0, 0, 0]));
    console.log(maximizeProfit([0, 0, 0, 0, 0]));
    console.log(maximizeProfit([100, 100, 100, 100, 100]));
    console.log(maximizeProfit([1, 100, 1, 100, 1]));
    console.log(maximizeProfit([24, 12, 48, 100, 72]));
    console.log(maximizeProfit([12, 24, 72, 48, 100]));
    console.log(maximizeProfit([100, 72, 48, 24, 12]));
    */
}

main();
