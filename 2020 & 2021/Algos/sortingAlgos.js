// Time-Complexity: Best Case - O(n), Average/Worst Case - O(n^2)
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

// Time-Complexity: Best/Average/Worst Case - O(n^2)
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

function quickSort(data, left, right) {
    let pivot;

    if (right <= left) {
        return;
    }
    else {
        pivot = parition(data, left, right);
        quickSort(data, left, pivot - 1);
        quickSort(data, pivot + 1, right);
    }

    return data;
}

function parition(data, left, right) {
    let pivot = data[left];
    let leftIndex = left + 1;
    let rightIndex = right;
    let temp;

    while (true)
    {
        while (leftIndex <= rightIndex && data[leftIndex] <= pivot)
        {
            leftIndex++;
        }
        while (rightIndex >= leftIndex && data[rightIndex] >= pivot)
        {
            rightIndex--;
        }
        if (rightIndex <= leftIndex)
        {
            break;
        }

        temp = data[leftIndex];
        data[leftIndex] = data[rightIndex];
        data[rightIndex] = temp;
        console.log(data);
    }

    temp = data[left];
    data[left] = data[rightIndex];
    data[rightIndex] = temp;
    console.log(data);

    return rightIndex;
}

function mergeSort(data) {
    if (data.length < 2)
    {
        return data;
    }

    let middle = Math.floor(data.length / 2);

    let right = mergeSort(data.slice(middle));
    let left = mergeSort(data.slice(0, middle));

    console.log("The left side is: ", left);
    console.log("The right side is: ", right);

    let merged = merge(left, right);

    console.log("Merged ", merged)
    return merged
}

function merge(left, right)
{
    if (!left.length)
    {
        return left;
    }

    if (!right.length)
    {
        return right;
    }

    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    let totalLen = left.length + right.length;

    while (result.length < totalLen)
    {
        if (left[leftIndex] < right[rightIndex])
        {
            result.push(left[leftIndex]);
            leftIndex++;
        }

        else 
        {
            result.push(right[rightIndex]);
            rightIndex++;
        }

        if (leftIndex == left.length && rightIndex != right.length)
        {
            for (let i = rightIndex; i < right.length; i++)
            {
                result.push(right[i]);
            }
        }

        else if (rightIndex == right.length && leftIndex != left.length)
        {
            for (let i = leftIndex; i < left.length; i++)
            {
                result.push(left[i]);
            }
        }
    }
    return result;
}

function shellSort(data)
{
    let gap = Math.floor(data.length / 2);

    while (gap > 0)
    {
        for (let iIndex = gap; iIndex < data.length; iIndex++)
        {
            let temp = data[iIndex];
            let jIndex = iIndex;

            while (jIndex >= gap && data[jIndex - gap] > temp)
            {
                data[jIndex] = data[jIndex - gap];
                jIndex -= gap;
            }

            data[jIndex] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    console.log(data);
}

function createHeap(data, length, index)
{
    let temp;
    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    if (left < length && data[index] < data[left])
    {
        largest = left;
    }

    if (right < length && data[largest] < data[right])
    {
        largest = right;
    }

    if (largest != index)
    {
        temp = data[index];
        data[index] = data[largest];
        data[largest] = temp;

        createHeap(data, length, largest);
    }
}

// Time Complexity: O(n log n)
function heapSort(data)
{
    let temp;
    let length = data.length;

    for (let index = length; index > 0; index--)
    {
        createHeap(data, length, index);
    }

    for (let index = length - 1; index > 0; index--)
    {
        temp = data[index];
        data[index] = data[0];
        data[0] = temp;

        createHeap(data, index, 0);
    }

    console.log(data);
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

    let arr = [3, 44, 38, 5];

    // quickSort(arr, 0, arr.length - 1);

    // mergeSort(arr);

    // shellSort([7, 6, 3, 10, 1, 5]);

    heapSort([8, 6, 2, 5, 3, 1]);
}

main();
