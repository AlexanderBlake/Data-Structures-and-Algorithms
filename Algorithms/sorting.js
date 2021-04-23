// Time Complexity: O(n^2) Quadratic Time
// Space Complexity: O(n) Total, O(1) Auxillary
function selectionSort(arr) {
    let smallestIndex;
    let temp;

    for (let i = 0; i < arr.length; i++) {
        smallestIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j;
            }
        }

        if (smallestIndex != i) {
            temp = arr[i];
            arr[i] = arr[smallestIndex];
            arr[smallestIndex] = temp;
        }
    }

    return arr;
}

// Time Complexity: O(n^2) Quadratic Time
// Space Complexity: O(n) Total, O(1) Auxillary
function insertionSort(arr) {
    return arr;
}

// Time Complexity: O(n^2) Quadratic Time
// Space Complexity: O(n) Total, O(1) Auxillary
function bubbleSort(arr) {
    let temp;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] += arr[j + 1];
                arr[j + 1] = arr[j] - arr[j + 1];
                arr[j] -= arr[j + 1];
            }

            /*
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            */
        }
    }

    return arr;
}

function arrayEqual(arr, arr2) {
    if (arr.length != arr2.length) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}

function main() {
    let arr = bubbleSort([3, 5, 1, 2, 4]);
    let expected = [1, 2, 3, 4, 5];

    console.assert(arrayEqual(arr, expected), "Bubble Sort");

    arr = selectionSort([3, 5, 1, 2, 4]);
    expected = [1, 2, 3, 4, 5];
    console.assert(arrayEqual(arr, expected), "Selection Sort");

    arr = insertionSort([3, 5, 1, 2, 4]);
    expected = [1, 2, 3, 4, 5];
    console.assert(arrayEqual(arr, expected), "Insertion Sort");
}

main();
