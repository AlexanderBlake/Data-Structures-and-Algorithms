// Time-Complexity: O(n^2)
// Space Complexity: O(n), Auxillary: O(1)
function bubbleSort(arr) {
    let temp;
    let isSorted;

    for (let i = 0; i < arr.length - 1; i++) {
        isSorted = true;

        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSorted = false;
            }
        }

        if (isSorted) {
            break;
        }
    }
    return arr;
}

// Time-Complexity: O(n^2)
// Space Complexity: O(n), Auxillary: O(1)
function selectionSort(arr) {
    let minIndex;
    let temp;

    for (let i = 0; i < arr.length; i++) {
        minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// Time-Complexity: O(n^2)
// Space Complexity: O(n), Auxillary: O(1)
function insertionSort(arr) {
    let temp;
    
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] < arr[j - 1]) {
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
    }
    return arr;
}

function arrayEquals(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            return false;
        }
    }

    return true;
}

function bubbleSortTests() {
    console.assert(arrayEquals(bubbleSort([]), []), "Empty list");
    console.assert(arrayEquals(bubbleSort([1]), [1]), "1 value list");
    console.assert(arrayEquals(bubbleSort([2, 1]), [1, 2]), "2 value list");
    console.assert(arrayEquals(bubbleSort([3, 1, 2]), [1, 2, 3]), "3 value list");
    console.assert(arrayEquals(bubbleSort([1, 2, 3, 4]), [1, 2, 3, 4]), "Sorted list");
    console.assert(arrayEquals(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]), [1, 2, 3, 4, 5, 6, 7, 8]), "Large list");
}

function selectionSortTests() {
    console.assert(arrayEquals(selectionSort([]), []), "Empty list");
    console.assert(arrayEquals(selectionSort([1]), [1]), "1 value list");
    console.assert(arrayEquals(selectionSort([2, 1]), [1, 2]), "2 value list");
    console.assert(arrayEquals(selectionSort([3, 1, 2]), [1, 2, 3]), "3 value list");
    console.assert(arrayEquals(selectionSort([1, 2, 3, 4]), [1, 2, 3, 4]), "Sorted list");
    console.assert(arrayEquals(selectionSort([6, 5, 3, 1, 8, 7, 2, 4]), [1, 2, 3, 4, 5, 6, 7, 8]), "Large list");
}

function insertionSortTests() {
    /*console.assert(arrayEquals(insertionSort([]), []), "Empty list");
    console.assert(arrayEquals(insertionSort([1]), [1]), "1 value list");
    console.assert(arrayEquals(insertionSort([2, 1]), [1, 2]), "2 value list");
    console.assert(arrayEquals(insertionSort([3, 1, 2]), [1, 2, 3]), "3 value list");
    console.assert(arrayEquals(insertionSort([1, 2, 3, 4]), [1, 2, 3, 4]), "Sorted list");*/
    console.assert(arrayEquals(insertionSort([6, 5, 3, 1, 8, 7, 2, 4]), [1, 2, 3, 4, 5, 6, 7, 8]), "Large list");
}

function main() {
    bubbleSortTests();
    selectionSortTests();
    insertionSortTests();
}

main();
