// How do you find the duplicate number on a given integer array?
// Space Complexity: (Total: O(n) Linear Space), (Auxillary: O(1) Constant Space)
// Time Complexity: O(n^2) Quadratic Time
/*
function findDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return -1;
}
*/


/*
// How do you find the duplicate number on a given integer array?
// Space Complexity: (Total: O(n) Linear Space), (Auxillary: O(1) Constant Space)
// Time Complexity: O(n log n)
function findDuplicate(arr) {
    let result = -1;
    arr.sort();

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            result = arr[i];
        }
    }

    return result;
}
*/

// How do you find the duplicate number on a given integer array?
// Space Complexity: (Total: O(n) Linear Space), (Auxillary: O(n) Linear Space)
// Time Complexity: O(n) Linear Time
function findDuplicate(arr) {
    /*
    let myObj = {};

     for (let i = 0; i < arr.length; i++) {
        if (myObj[arr[i]]) {
            return arr[i];
        }
        myObj[arr[i]] = true;
     }
     */

    let mySet = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (mySet.has(arr[i])) {
            return arr[i];
        }
        mySet.add(arr[i]);
    }

    return -1;
}

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

function main() {
    findDuplicateTests();
}

main();
