/*
function fib(n) {
    if (n < 2) {
        return n;
    }

    let temp;
    let current = 1;
    let previous = 0;

    for (let i = 2; i <= n; i++) {
        temp = current + previous;
        previous = current;
        current = temp;
    }
    
    return current;
}
*/

function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

function main() {
    console.assert(fib(0) === 0);
    console.assert(fib(1) === 1);
    console.assert(fib(2) === 1);
    console.assert(fib(3) === 2);
    console.assert(fib(4) === 3);
    console.assert(fib(5) === 5);
    console.assert(fib(6) === 8);
    console.assert(fib(7) === 13);
    console.log("Tests Complete");
}

main();