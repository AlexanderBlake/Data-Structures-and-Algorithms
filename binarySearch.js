/* I want you to guess a number between 1 and 100 inclusively

1st: $10
2nd: $8
3rd: $6
4th: $4
5th: $2
6th: $0
7th: -$2
8th: -$4
9th: -$6
... 

After each guess I will tell you whether you are too high or too low

Accept the Challenge (Truly Random): 3
Reject the Challenge (): 2
Does not matter/Reject the Challenge (If you know the number is on the last level of the binary tree): 1
*/

function binarySearchIter(n, actual) {
    let guess = 50;
    let delta = 25;
    let payout = 10;

    while (guess != actual) {
        // console.log(guess);

        if (guess < actual) {
            guess += delta;
        } else {
            guess -= delta;
        }

        delta = Math.ceil(delta / 2);
        payout -= 2;
    }
    /* console.log(guess);
    console.log("\n$" + payout);*/

    return payout;
}

function binarySearchRec(low = 1, high = 100, actual) {

}

function findParent(process, node) {
    if (node != process) {
        for (let i = 0; i < node.children; i++) {
            if (node[i] == process) {
                return node;
            }
        }

        for (let i = 0; i < node.children; i++) {
            findParent(process, node[i]);
        }
    }
}

function main() {
    /* let actual = Math.round(Math.random() * 100 + 1)
    console.log("Actual: " + actual + "\n");
    binarySearchIter(100, actual); */

    let totalPayouts = 0;

    for (let i = 1; i <= 100; i++) {
        totalPayouts += binarySearchIter(100, i);
    }

    console.log(totalPayouts / 100);
}

main();
