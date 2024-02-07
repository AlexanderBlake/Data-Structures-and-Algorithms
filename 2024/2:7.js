// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let num = arr[i];
        if (num > arr[i + 1]) {
            return false;
        }
    }
    return true
}

// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
function mySum(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result; 
}

// Sorted
// Time Complexity: θ(1) Constant Time
// Space Complexity: θ(1) Constant Space

// Unknown whether it is sorted
// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
function range(arr, sorted) {
    if (sorted) {
        return arr[arr.length - 1] - arr[0];
    }
    
    let smallest = arr[0];
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        } else if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest - smallest;
}

function main() {
    let arr = [1, 2, 3, 4, 5];

    console.assert(isSorted(arr) === true);
    console.assert(mySum(arr) === 15, "Sum Failed");
    console.assert(range(arr, true) === 4, "Range Failed");
}

main();
