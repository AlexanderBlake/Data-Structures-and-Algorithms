// Write an infinite loop
function infiniteLoop() {
    /*
    while (true) {
        console.log("while looping");
    }
    */

    /*
    do {
        
    } while(true);
    */

    /*
    for (; ; ) {
        console.log("for looping");
    }
    */
}

function stackOverflow() {
    stackOverflow();
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// fibonnacciIter(0) -> 0
// fibonnacciIter(1) -> 1
// fibonnacciIter(2) -> 1
// fibonnacciIter(3) -> 2
// Space Complexity: O(1) Constant Space
// Time Complexity: O(n) Linear Time
function fibonnacciIter(n) {
    let temp;
    let prev = 0;
    let curr = 1;
    // let arr = [0, 1];
    
    if (n < 2) {
        return n;
    }

    for (let i = 2; i <= n; i++) {
        // arr.push(arr[i - 1] + arr [i - 2]);

        temp = curr + prev;
        prev = curr;
        curr = temp;
    }
    // console.log(arr);
    // return arr[arr.length - 1];
    return curr;
}

// Space Complexity: O(1) Constant Space
// Time Complexity: O(1) Constant Time
function swap(a, b) {
    console.log(a, b);

    b += a;
    a = b - a;
    b -= a;

    console.log(a, b);
}

function fibonnaciIterTests() {
    console.assert(fibonnacciIter(0) === 0, 0);
    console.assert(fibonnacciIter(1) === 1, 1);
    console.assert(fibonnacciIter(2) === 1, 2);
    console.assert(fibonnacciIter(3) === 2, 3);
    console.assert(fibonnacciIter(4) === 3, 4);
    console.assert(fibonnacciIter(5) === 5, 5);
    console.assert(fibonnacciIter(6) === 8, 6);
    console.assert(fibonnacciIter(7) === 13, 7);
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// Time Complexity: O(2^n) Exponential Time
// Space Complexity: O(1) Constant Space
function fibonnacciRec(n) {
    if (n < 2) {
        return n;
    }

    console.log(n);
    return fibonnacciRec(n - 1) + fibonnacciRec(n - 2);
}

function fibonnaciRecTests() {
    console.assert(fibonnacciRec(0) === 0, 0);
    console.assert(fibonnacciRec(1) === 1, 1);
    console.assert(fibonnacciRec(2) === 1, 2);
    console.assert(fibonnacciRec(3) === 2, 3);
    console.assert(fibonnacciRec(4) === 3, 4);
    console.assert(fibonnacciRec(5) === 5, 5);
    console.assert(fibonnacciRec(6) === 8, 6);
    console.assert(fibonnacciRec(7) === 13, 7);
}


// 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
// Time Complexity: O(n) Linear Time
// Space Complexity: O(n) Linear Space (Sting of n-length)
function fizzBuzz(n) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result += 'fizzbuzz';
        } else if (i % 5 === 0) {
            result += 'buzz';
        } else if (i % 3 === 0) {
            result += 'fizz';
        } else {
            result += i;
        }

        if (i < n) {
            result += ', ';
        }
    }

    return result;
}


// Time Complexity: O(n) Linear Time
function fizzBuzzRec(n) {
    if (n < 1) {
        return '';
    } else if (n === 1) {
        return '1';
    }

    if (n % 15 === 0) {
        return fizzBuzzRec(n - 1) + ', fizzbuzz';
    } else if (n % 3 === 0) {
        return fizzBuzzRec(n - 1) + ', fizz';
    } else if (n % 5 === 0) {
        return fizzBuzzRec(n - 1) + ', buzz';
    }
    return fizzBuzzRec(n - 1) + ', ' + n;
}


function fizzBuzzTests() {
    console.assert(fizzBuzz(0) === '', 0);
    console.assert(fizzBuzz(1) === '1', 1);
    console.assert(fizzBuzz(2) === '1, 2', 2);
    console.assert(fizzBuzz(3) === '1, 2, fizz', 3);
    console.assert(fizzBuzz(5) === '1, 2, fizz, 4, buzz', 5);
    console.assert(fizzBuzz(15) === '1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz', 15);

    console.assert(fizzBuzzRec(0) === '', 0);
    console.assert(fizzBuzzRec(1) === '1', 1);
    console.assert(fizzBuzzRec(2) === '1, 2', 2);
    console.assert(fizzBuzzRec(3) === '1, 2, fizz', 3);
    console.assert(fizzBuzzRec(5) === '1, 2, fizz, 4, buzz', 5);
    console.assert(fizzBuzzRec(15) === '1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz', 15);
}


function main() {
    fizzBuzzTests();
    // console.log(fizzBuzzRec(3));
    // infiniteLoop();
    // stackOverflow();
    fibonnaciIterTests();
    // swap(1, 2);
    fibonnaciRecTests();
    console.log(fibonnacciIter(99));
    // console.log(fibonnacciRec(99));
}

main();
