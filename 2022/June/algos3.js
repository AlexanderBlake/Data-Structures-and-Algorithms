// How do you find the duplicate number on a given integer array?
// There will be at most one duplicate
// Space Complexity: O(n) Linear Space
// Time Complexity: O(n) Linear Time
/*
function findDuplicate(arr) {
    let mySet = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (mySet.has(arr[i])) {
            return arr[i];
        } else {
            mySet.add(arr[i]);
        }
    }
    return -1;
}
*/

// How do you find the duplicate number on a given integer array?
// There will be at most one duplicate
// Space Complexity: O(1) Linear Space
// Time Complexity: O(n log n)
function findDuplicate(arr) {
    arr.sort();

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return arr[i];
        }
    }
    return -1;
}

// How do you find the duplicate number on a given integer array?
// There will be at most one duplicate
// Space Complexity: O(1) Constant Space
// Time Complexity: O(n^2) Quadratic Time
/*
function findDuplicate(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return arr[i];
            }
        }
    }
    return -1;
}
*/

function findDuplicateTests() {
    console.assert(findDuplicate([1, 2, 3, 1]) === 1, "Front and back");
    console.assert(findDuplicate([1, 1, 2, 3]) === 1, "Front");
    console.assert(findDuplicate([1, 2, 3]) === -1, "No duplicates");
    console.assert(findDuplicate([1, 2, 3, 3]) === 3, "Back");
    console.assert(findDuplicate([1, 2, 2, 3]) === 2, "Middle");
    console.assert(findDuplicate([3, 5, 1, -2, 1]) === 1, "Unsorted");
}

// Write a function that makes the most money buying and selling stocks knowing what the prices will be for the week.
// Long positions only, no short selling
// No commissions, unlimited capital, you can only own 1 share at most, unlimited amount of trades
// You must close all positions by the weekend
// Return the max profit (loss)

// Time Complexity: O(n) Linear Tiime
function stocks(prices) {

}

// A king is building a castle on his border
// He wants to put a castle at the top of every hill and at the bottom of every valley.
// Time Complexity: O(n) Linear Time
function castles(landscape) {

}

function main() {
    findDuplicateTests();
}

main();