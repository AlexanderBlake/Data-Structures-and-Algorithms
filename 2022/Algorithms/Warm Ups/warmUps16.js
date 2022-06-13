// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// Space Complexity: O(1) Constant Space
// Time Complexity: O(n) Linear Time
/*
function fibonacci(n) {
    let x = 0;
    let y = 1;
    let z = 0;

    if (n <= 2) {
        return n - 1;
    }

    for (let i = 2; i < n ; i++) {
        z = x + y
        x = y;
        y = z;
    }

    return z;
}
*/

// Time Complexity: O(2^n) Exponential Time
function fibonacci(n) {
    if (n <= 2) {
        return n - 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciTests() {
    console.assert(fibonacci(1) === 0, "First Term");
    console.assert(fibonacci(2) === 1, "Second Term");
    console.assert(fibonacci(3) === 1, "Third Term");
    console.assert(fibonacci(4) === 2, "Fourth Term");
    console.assert(fibonacci(5) === 3, "Fifth Term");
    console.assert(fibonacci(6) === 5, "Sixth Term");
    console.assert(fibonacci(7) === 8, "Seventh Term");
    console.assert(fibonacci(8) === 13, "Eighth Term");
    console.assert(fibonacci(9) === 21, "Ninth Term");
    console.assert(fibonacci(10) === 34, "Tenth Term");
}


function nand(a, b) {
    return !(a && b);
}

function nor(a, b) {
    return !(a || b);
}

function xor(a, b) {
    return a !== b;
}

function xnor(a, b) {
    return a === b;
}

function challenge1(x, y)
{
    /*
    if (x)
    {
        y = false;
    }
    else
    {
        y = true;
    }
    */
    y = !x;
}

function challenge2(x, y)
{
    /*
    if (x)
    {
        return y;
    }
    else
    {
        return false;
    }
    */
    /*
    if (x && y) return true;
    return false;
    */
    return (x && y);
}

function challenge3(x, z)
{
    /*
    if (x)
    {
        y = z;
    }
    else
    {
        y = !z;
    }
    */
    y = (x === z);
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

// Average/Worst Time Complexity: O(n^2) Quadratic Time
// Best Time Complexity: O(n) Linear Time
function insertionSort(arr) {
    let temp;

    for (let i = 0; i < arr.length - 1; i++) {
        let j = i + 1;

        while (arr[j] < arr[j - 1] && j > 0) {
            arr[j] += arr[j - 1];
            arr[j - 1] = arr[j] - arr[j - 1];
            arr[j] -= arr[j - 1];

            /*
            temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            */
            j--;
        }
    }

    return arr;
}
//[5,2,6]

// Average/Worst Time Complexity: O(n^2) Quadratic Time
// Best Time Complexity: O(n) Linear Time
function bubbleSort(arr) {
    let swapped = true;

    for (let i = arr.length - 1; i >= 0 || swapped; i--)
    {
        swapped = false;

        for (let j = 0; j < i; j++)
        {
            if (arr[j] > arr[j + 1]) 
            {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
    }
    return arr;
}

// Best/Average/Worst Time Complexity: O(n^2) Quadratic Time
function selectionSort(arr) {
    let smallestIndex;

    for (let i = 0; i < arr.length; i++) {
        smallestIndex = i;

        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j;
            }
        }

        let temp = arr[smallestIndex];
        arr[smallestIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

function insertionSortTests() {
    console.assert(arrayEquals(insertionSort([]), []), "Empty list");
    console.assert(arrayEquals(insertionSort([1]), [1]), "1 value list");
    console.assert(arrayEquals(insertionSort([2, 1]), [1, 2]), "2 value list");
    console.assert(arrayEquals(insertionSort([3, 1, 2]), [1, 2, 3]), "3 value list");
    console.assert(arrayEquals(insertionSort([1, 2, 3, 4]), [1, 2, 3, 4]), "Sorted list");
    console.assert(arrayEquals(insertionSort([6, 5, 3, 1, 8, 7, 2, 4]), [1, 2, 3, 4, 5, 6, 7, 8]), "Large list");
}

function selectionSortTests() {
    console.assert(arrayEquals(selectionSort([]), []), "Empty list");
    console.assert(arrayEquals(selectionSort([1]), [1]), "1 value list");
    console.assert(arrayEquals(selectionSort([2, 1]), [1, 2]), "2 value list");
    console.assert(arrayEquals(selectionSort([3, 1, 2]), [1, 2, 3]), "3 value list");
    console.assert(arrayEquals(selectionSort([1, 2, 3, 4]), [1, 2, 3, 4]), "Sorted list");
    console.assert(arrayEquals(selectionSort([6, 5, 3, 1, 8, 7, 2, 4]), [1, 2, 3, 4, 5, 6, 7, 8]), "Large list");
}

function bubbleSortTests() {
    console.assert(arrayEquals(bubbleSort([]), []), "Empty list");
    console.assert(arrayEquals(bubbleSort([1]), [1]), "1 value list");
    console.assert(arrayEquals(bubbleSort([2, 1]), [1, 2]), "2 value list");
    console.assert(arrayEquals(bubbleSort([3, 1, 2]), [1, 2, 3]), "3 value list");
    console.assert(arrayEquals(bubbleSort([1, 2, 3, 4]), [1, 2, 3, 4]), "Sorted list");
    console.assert(arrayEquals(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]), [1, 2, 3, 4, 5, 6, 7, 8]), "Large list");
}

function main() {
    let arr = [24, 12, 48, 96, 6, 3, 100];

    insertionSortTests();
    selectionSortTests();
    bubbleSortTests();

    fibonacciTests();
}

main();
