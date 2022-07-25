// How do you find the duplicate number on a given integer array?
// There will be at most one duplicate
// Space Complexity: O(n) Linear Space
// Time Complexity: O(n) Linear Time
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

// How do you find the duplicate number on a given integer array?
// There will be at most one duplicate
// Space Complexity: O(1) Constant Space
// Time Complexity: O(n log n)
/*
function findDuplicate(arr) {
    arr.sort();

    for (let index = 0; index < arr.length - 1; index++) {
        const element = arr[index];

        if (element === arr[index + 1]) {
            return element;
        }
    }

    return -1;
}
*/

// How do you find the duplicate number on a given integer array?
// There will be at most one duplicate
// Space Complexity: O(1) Constant Space
// Time Complexity: O(n^2) Quadratic Time
/*
function findDuplicate(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[j];
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

// Space Complexity: O(n) Linear Space
// Time Complexity: O(n) Linear Time
function findSum(arr, target) {
    let myObj = {};

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];

        if (myObj[current] !== undefined) {        
            if (current < target - current) {
                return [current, target - current];
            } else {
                return [target - current, current];
            }
        }
        else {
            myObj[target - current] = arr[i];
        }
    }
}

function arrayEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

function findSumTests() {
    console.assert(arrayEquals(findSum([24, 48, 96, 12, 6, 3, 100], 9), [3, 6]), "Middle");
    console.assert(arrayEquals(findSum([24, 48, 96, 12, 6, 3, 100], 72), [24, 48]), "Front");
    console.assert(arrayEquals(findSum([24, 48, 96, 12, 6, 3, 100], 124), [24, 100]), "Front and back");
    console.assert(arrayEquals(findSum([24, 48, 96, 12, 6, 3, 100], 103), [3, 100]), "Back");
    console.assert(arrayEquals(findSum([24, 48, 96, 12, 6, 3, 100], 99), [3, 96]), "Random");
}

// Write a function that makes the most money buying and selling stocks knowing what the prices will be for the week.
// Long positions only, no short selling
// No commissions, unlimited capital, you can only own 1 share at most, unlimited amount of trades
// You must close all positions by the weekend
// Return the max profit (loss)

// Time Complexity: O(n) Linear Tiime
function stocks(prices) {

}

function stocksTests() {
    console.assert(stocks([]) === -1, "Empty list");
    console.assert(stocks([1, 2, 3, 4]) === -1, "List of length 4");
    console.assert(stocks([0, 0, 0, 0, 0]) === -1, "All zeros");
    console.assert(stocks([2, -1, 1, 2, 3]) === -1, "One negative value");
    console.assert(stocks([2, 3, 0, 4, 5]) === -1, "One zero value");
    console.assert(stocks([2, 3, 1, 4, 0]) === -1, "One zero value");
    
    console.assert(stocks([1, 1, 1, 1, 1]) === 0, "All the same value");
    console.assert(stocks([100, 80, 60, 40, 20]) === 0, "Decreasing");

    console.assert(stocks([100, 1, 100, 1, 100]) === 198, "Oscillating");
    console.assert(stocks([20, 40, 60, 80, 100]) === 80, "Increasing");
    console.assert(stocks([20, 32, 10, 8, 76]) === 80, "Random");
    console.assert(stocks([20, 32, 10, 8, 7]) === 12, "Random 2");
}


// A king is building a castle on his border
// He wants to put a castle at the top of every hill and at the bottom of every valley.
// Time Complexity: O(n) Linear Time
function castles(landscape) {

}


function castlesTests() {
    console.assert(castles([0, 5, 10, 8, 2, 10, 12, 20, 15, 3, 4, 5, 3]) === 5, 'Test 1');
    console.assert(castles([0, 0, 0, 0, 0, 0]) === 0, 'Flat');
    console.assert(castles([0, 0, 0, 1]) === 1, 'Flat then increase');
    console.assert(castles([1, 1, 1, 0]) === 1, 'Flat then decrease');
    console.assert(castles([0, 5, 0, 5]) === 2, 'Oscillation');
}

function main() {
    findDuplicateTests();
    findSumTests();
}

main();