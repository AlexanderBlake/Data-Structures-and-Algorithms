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
    
}

function mergeSort(arr) {

}

function main()
{
    swap(3, 4);

    bubbleSort(["Bob", "Alex", "John", "Charlie"]);

    bubbleSort([29, 10, 14, 37, 14]);
    bubbleSort([29, 10, 14, 37, 14, 24, 12, 48]);
    selectionSort([29, 10, 14, 37, 14]);
    selectionSort([29, 10, 14, 37, 14, 24, 12, 48]);
    insertionSort([29, 10, 14, 37, 14]);
    insertionSort([29, 10, 14, 37, 14, 24, 12, 48]);
}

main();
