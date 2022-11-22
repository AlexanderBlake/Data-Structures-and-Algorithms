// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

/*
// Time Complexity: O(2 ^ n) Exponential Time
// Space Complexity: Auxillary O(1) Constant Space, Total O(n) Linear Space
function fib(n) {
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}
*/

// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
function fib(n) {
    let temp;
    let result;
    let prev = 0;
    let curr = 1;

    if (n <= 1) {
        result = n;
    } else {
        for (let i = 2; i <= n; i++) {
            temp = prev + curr;
            prev = curr;
            curr = temp;
        }

        result = curr;
    }

    return result;
}

function main() {
    for (let i = 0; i < 100; i++) {
        console.log(fib(i));
    }
}

main();
