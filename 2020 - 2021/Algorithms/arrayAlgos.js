// Return the integer
// Best Time Complexity: O(n)
function getSecondHighest(arr) {
    if (arr.length >= 2) {
        let sHighest = null;
        let highest = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > highest) {
                sHighest = highest;
                highest = arr[i];
            } else if (sHighest == null || arr[i] > sHighest) {
                sHighest = arr[i];
            }
        }

        return sHighest;
    }
    return null;  
}

// Sort first then go to the end - 1
// Ideal Time Complexity: O(n log(n) + n) = O(n log(n))
// Written Time Complexity: O(n^2 + n) = O(n^2)
function getSecondHighest2(arr) {
    let returnVal = null;

    if (arr.length >= 2) {
        // let temp;

        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    /*temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;*/

                    arr[i] += arr[j];
                    arr[j] = arr[i] - arr[j];
                    arr[i] -= arr[j];
                }
            }
        }
        returnVal = arr[arr.length - 2];
    }

    return returnVal;
}

// Reverse Array in-place
// Space Complexity: O(1) auxiliary
function reverseArray(arr) {
    if (arr.length < 1) {
        return null;
    }

    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];

        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;

        //swap the first and last value.
        //swap the next value with second from end
    }
    console.log(arr);
    return arr;
}

function getSecondHighestTest() {
    console.assert(getSecondHighest([]) == null, "Empty Array");
    console.assert(getSecondHighest([3]) == null, "Array with 1 values");
    console.assert(getSecondHighest([3, 2]) == 2, "Array with 2 values");
    console.assert(getSecondHighest([3, 2, 5, 10, 3, 4]) == 5, "Large array");
    console.assert(getSecondHighest([-3, -2, -5, -10, -3, -4]) == -3, "All negative values array");
    console.assert(getSecondHighest([13, 2, 5, 10, 3, 4]) == 10, "Highest value at the start");
}

function getSecondHighest2Test() {
    console.assert(getSecondHighest2([]) == null, "Empty Array");
    console.assert(getSecondHighest2([3]) == null, "Array with 1 values");
    console.assert(getSecondHighest2([3, 2]) == 2, "Array with 2 values");
    console.assert(getSecondHighest2([3, 2, 5, 10, 3, 4]) == 5, "Large array");
    console.assert(getSecondHighest2([-3, -2, -5, -10, -3, -4]) == -3, "All negative values array");
    console.assert(getSecondHighest2([13, 2, 5, 10, 3, 4]) == 10, "Highest value at the start");
}

function reverseArrayTest() {
    console.assert(reverseArray([]) == null, "Empty Array");
    console.assert(reverseArray([1]), "1 value Array");
    console.assert(reverseArray([1, 2]), "2 value Array");
    console.assert(reverseArray([1, 2, 3]) == [3, 2, 1], "3 value Array");
    console.assert(reverseArray([1, 2, 3, 4]) == [4, 3, 2, 1], "Even n Array");
    console.assert(reverseArray([1, 2, 3, 4, 5]) == [5, 4, 3, 2, 1], "Odd n Array");
}

function main() {
    getSecondHighestTest();
    getSecondHighest2Test();
    // reverseArrayTest();
}

main();
