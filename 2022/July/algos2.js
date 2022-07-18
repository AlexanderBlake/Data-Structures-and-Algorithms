// n = 15
// 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
// Time Complexity: O(n) Linear Time
// Space Complexity: O(n) Linear Space
function fizzBuzz(n) {
    let myString = '';

    for (let i = 1; i <= n; i++) {
        /*
        if (i % 15 === 0) {
            myString += 'fizzbuzz';
        } else if (i % 3 === 0) {
            myString += 'fizz';
        } else if (i % 5 === 0) {
            myString += 'buzz';
        } else {
            myString += i;
        }
        */

        if (i % 3 === 0) {
            if (i % 5 === 0) {
                myString += 'fizzbuzz';
            } else {
                myString += 'fizz';
            }
        } else if (i % 5 === 0) {
            myString += 'buzz';
        } else {
            myString += i;
        }

        if (i != n) {
            myString += ', ';
        }
    }

    return myString;
}

// Time Complexity: O(n^2) Quadratic Time
// T(n) = n^2 + n
function test() {
    let n = 5;
    let counter = 1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(counter++);
        }
    }

    for (let i = 0; i < n; i++) {
        console.log(counter++);
    }
}

/*
// 0, 1, 1, 2, 3, 5, 8, 13
// n = 8
// 13
// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
function fibonnaci(n) {
    let temp;
    let current = 1;
    let previous = 0;

    for (let i = 2; i < n; i++) {
        temp = current + previous;
        previous = current;
        current = temp;
    }

    return current;
}
*/

// Time Complexity: O(2^n) Exponential Time
// Space Complexity: O(1) Constant Space (Algo-level)
function fibonnaci(n) {
    if (n <= 2) {
        return n - 1;
    }
    // console.log(n);

    return fibonnaci(n - 1) + fibonnaci(n - 2);
}

function main() {
    // console.log(fizzBuzz(15));
    // test();
    console.log(fibonnaci(8));
}


main();