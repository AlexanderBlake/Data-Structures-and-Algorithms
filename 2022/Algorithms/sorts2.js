function insertionSort(arr) {
    let temp;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j >= 1; j--) {
            if (arr[j] < arr[j - 1]) {
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
    }
}

function swap(a, b) {
    a += b;
    b = a - b;
    a -= b;

    console.log(a);
    console.log(b);
}

function selectionSort(arr) {
    let temp;
    let smallestIndex;

    for (let i = 0; i < arr.length; i++) {
        smallestIndex = i;
    
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallestIndex] > arr[j]) {
                smallestIndex = j;
            }
        }

        temp = arr[i];
        arr[i] = arr[smallestIndex];
        arr[smallestIndex] = temp;
    }

    console.log(arr);
}

function bubbleSort(arr, end = arr.length - 1) {
    let hasChanged = false;

    for (let i = 0; i < end; i++) {
        let firstNum = arr[i];
        let secondNum = arr[i + 1];

        if (firstNum > secondNum) {
            arr[i] = secondNum;
            arr[i + 1] = firstNum;
            hasChanged = true;
        }
    }
    if (hasChanged) {
        bubbleSort(arr, --end);
    } else {
        console.log(arr);
    }
}

function merge(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let result = [];

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex++]);
        } else {
            result.push(right[rightIndex++]);
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        result.push(left[i]);
    }

    for (let i = rightIndex; i < right.length; i++) {
        result.push(right[i]);
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));

    let result = merge(left, right);

    return result;
}

function main()
{

    console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4]));

    /*
    swap(3, 4);

    bubbleSort(["Bob", "Alex", "John", "Charlie"]);

    bubbleSort([29, 10, 14, 37, 14]);
    bubbleSort([29, 10, 14, 37, 14, 24, 12, 48]);
    selectionSort([29, 10, 14, 37, 14]);
    selectionSort([29, 10, 14, 37, 14, 24, 12, 48]);
    insertionSort([29, 10, 14, 37, 14]);
    insertionSort([29, 10, 14, 37, 14, 24, 12, 48]);
    */
}

main();
