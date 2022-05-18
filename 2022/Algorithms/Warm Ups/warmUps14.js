// T(n) = 1/2 * n^2
// Time Complexity: O(n^2) Quadratic Time
function findDuplicate(arr) {
    // One loop nested inside of another loop
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }

    return -1;
}

/*
// Time Complexity: O(n log n)
function findDuplicate(arr) {

}

// Time Complexity: O(n) Linear Time
function findDuplicate(arr) {

}
*/

// Time Complexity: O(n) Linear Time
function isPalindrome(word) {

}

// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Time
function fibonnacciIter(n) {
    if (n <= 2) {
        return n - 1;
    }

    let temp;
    let prev = 0;
    let curr = 1;

    for (let i = n - 3; i >= 0; i--) {
        temp = prev;
        prev = curr;
        curr = temp + prev;
    }

    return curr;
}

// Time Complexity: O(2^n) Exponential Time
function fibonnacciRec(n) {
    if (n <= 2) {
        return n - 1;
    }

    return fibonnacciRec(n - 1) + fibonnacciRec(n - 2);
}

// T(n) = 2n
// Time Complexity: O(n) Linear Time
function fizzBuzz(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("fizzbuzz");
        } else if (i % 3 === 0) {
            result.push("fizz");
        } else if (i % 5 === 0) {
            result.push("buzz");
        } else {
            result.push(i);
        }
    }

    return result.join(", ");
}

/*
// T(n) = n
// Time Complexity: O(n) Linear Time
function fizzBuzz(n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result += "fizzbuzz";
        } else if (i % 3 === 0) {
            result += "fizz";
        } else if (i % 5 === 0) {
            result += "buzz";
        } else {
            result += i;
        }

        if (i !== n) {
            result += ", ";
        }
    }

    return result;
}
*/

function findDuplicateTests() {
    console.assert(findDuplicate([1, 1, 2, 3, 4, 5]) === 1, "1 side by side");
    console.assert(findDuplicate([1, 2, 3, 3, 4, 5]) === 3, "3 side by side");
    console.assert(findDuplicate([1, 2, 3, 4, 5, 5]) === 5, "5 side by side");
    console.assert(findDuplicate([1, 2, 3, 4, 5, 1]) === 1, "1 at front and end");
    console.assert(findDuplicate([1, 2, 3, 4, 2, 5]) === 2, "2 not side by side");
    console.assert(findDuplicate([1]) === -1, "No duplicates");
    console.assert(findDuplicate([1, 2, 3, 4, 5]) === -1, "No duplicates");
    console.assert(findDuplicate([1, 1]) === 1, "[1, 1]");
    console.assert(findDuplicate([1, 5, 4, 2, 3, 2]) === 2, "2 Random Order");
}

function isPalindromeTests() {
    console.assert(isPalindrome("racecar"));
    console.assert(isPalindrome("dad"));
    console.assert(!isPalindrome("alex"));
    console.assert(!isPalindrome("abc"));
    console.assert(isPalindrome("tacocat"));
    console.assert(isPalindrome("radar"));
    console.assert(isPalindrome("abba"));
}

function fibonnacciIterTests() {
    console.assert(fibonnacciIter(1) === 0, "First term");
    console.assert(fibonnacciIter(2) === 1, "Second term");
    console.assert(fibonnacciIter(3) === 1, "Third term");
    console.assert(fibonnacciIter(4) === 2, "Fourth term");
    console.assert(fibonnacciIter(5) === 3, "Fifth term");
    console.assert(fibonnacciIter(6) === 5, "Sixth term");
    console.assert(fibonnacciIter(7) === 8, "Seventh term");
    console.assert(fibonnacciIter(8) === 13, "Eighth term");
}

function fibonnacciRecTests() {
    console.assert(fibonnacciRec(1) === 0, "First term");
    console.assert(fibonnacciRec(2) === 1, "Second term");
    console.assert(fibonnacciRec(3) === 1, "Third term");
    console.assert(fibonnacciRec(4) === 2, "Fourth term");
    console.assert(fibonnacciRec(5) === 3, "Fifth term");
    console.assert(fibonnacciRec(6) === 5, "Sixth term");
    console.assert(fibonnacciRec(7) === 8, "Seventh term");
    console.assert(fibonnacciRec(8) === 13, "Eighth term");
}

function fizzBuzzTests() {
    console.assert(fizzBuzz(-1) === "", -1);
    console.assert(fizzBuzz(0) === "", 0);
    console.assert(fizzBuzz(8) === "1, 2, fizz, 4, buzz, fizz, 7, 8", 8);
    console.assert(fizzBuzz(15) === "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz", 15);
}

function main() {
    /*
    isPalindromeTests();
    */

    findDuplicateTests();
    fibonnacciIterTests();
    fibonnacciRecTests();
    fizzBuzzTests();
}

main();
