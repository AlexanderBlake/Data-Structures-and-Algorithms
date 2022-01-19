// Time Complexity: Average/Worst O(n^2) Best O(n)
// Space Complexity: O(n) Total O(1) Auxiliary
function insertionSort(arr)
{
    let temp;

    for (let i = 0; i < arr.length; i++)
    {
        let j = i + 1;
        while (j >= 0 && arr[j] < arr[j - 1])
        {
            temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;

            j--;
        }
    }

    return arr;
}


// Time Complexity: Best/Average/Worst O(n^2)
// Space Complexity: O(n) Total O(1) Auxiliary
function selectionSort(arr)
{
    let temp;
    let smallestIndex;

    for (let i = 0; i < arr.length - 1; i++) 
    {
        smallestIndex = i;

        for (let j = i + 1; j < arr.length; j++) 
        {
            if (arr[j] < arr[smallestIndex])
            {
                smallestIndex = j;
            }
        }

        if (smallestIndex != i)
        {
            arr[i] +=  arr[smallestIndex];
            arr[smallestIndex] = arr[i] - arr[smallestIndex];
            arr[i] -= arr[smallestIndex];
        }

        /*
        temp = arr[i];
        arr[i] = arr[smallestIndex];
        arr[smallestIndex] = temp;
        */
    }
    return arr;
}


// Time Complexity: Average/Worst O(n^2) Best O(n)
// Space Complexity: O(n) Total O(1) Auxiliary
function bubbleSort(arr)
{
    let temp;
    let isSorted = false;

    for (let i = 0; i < arr.length && !isSorted; i++)
    {
        isSorted = true;
        for (let j = 0; j < arr.length - 1 - i; j++)
        {
            if (arr[j + 1] < arr[j])
            {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                isSorted = false;
            }
        }
    }
    return arr;
}


function arrayEquals(arr1, arr2)
{
    if (arr1.length !== arr2.length)
    {
        return false;
    }

    for (let i = 0; i < arr1.length; i++)
    {
        if (arr1[i] !== arr2[i])
        {
            return false;
        }
    }
    return true;
}

function bubbleSortTests()
{
    console.log("Bubble Sort Tests");
    console.assert(arrayEquals(bubbleSort([]), []), "Empty list");
    console.assert(arrayEquals(bubbleSort([1]), [1]), "1 value list");
    console.assert(arrayEquals(bubbleSort([2, 1]), [1, 2]), "2 value list");
    console.assert(arrayEquals(bubbleSort([3, 1, 2]), [1, 2, 3]), "3 value list");
    console.assert(arrayEquals(bubbleSort([1, 2, 3, 4]), [1, 2, 3, 4]), "Sorted list");
    console.assert(arrayEquals(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]), [1, 2, 3, 4, 5, 6, 7, 8]), "Large list");
}

function selectionSortTests()
{
    console.log("Selection Sort Tests");
    console.assert(arrayEquals(selectionSort([]), []), "Empty list");
    console.assert(arrayEquals(selectionSort([1]), [1]), "1 value list");
    console.assert(arrayEquals(selectionSort([2, 1]), [1, 2]), "2 value list");
    console.assert(arrayEquals(selectionSort([3, 1, 2]), [1, 2, 3]), "3 value list");
    console.assert(arrayEquals(selectionSort([1, 2, 3, 4]), [1, 2, 3, 4]), "Sorted list");
    console.assert(arrayEquals(selectionSort([6, 5, 3, 1, 8, 7, 2, 4]), [1, 2, 3, 4, 5, 6, 7, 8]), "Large list");
}

function insertionSortTests()
{
    console.log("Insertion Sort Tests");
    console.assert(arrayEquals(insertionSort([]), []), "Empty list");
    console.assert(arrayEquals(insertionSort([1]), [1]), "1 value list");
    console.assert(arrayEquals(insertionSort([2, 1]), [1, 2]), "2 value list");
    console.assert(arrayEquals(insertionSort([3, 1, 2]), [1, 2, 3]), "3 value list");
    console.assert(arrayEquals(insertionSort([1, 2, 3, 4]), [1, 2, 3, 4]), "Sorted list");
    console.assert(arrayEquals(insertionSort([6, 5, 3, 1, 8, 7, 2, 4]), [1, 2, 3, 4, 5, 6, 7, 8]), "Large list");
}


function main()
{
    insertionSortTests();
    selectionSortTests();
    bubbleSortTests();
}

main();
