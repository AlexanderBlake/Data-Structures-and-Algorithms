// Space Complexity: Always Total O(n) Linear Space, Always Auxillary O(1) Constant Space 
// Time Complexity: Always Comparisions O(n^2), Average Swaps O(n)
function selectionSort(arr)
{
    let temp;
    let minIndex;
    let swaps = 0;
    let comparisions = 0;

    for (let i = 0; i < arr.length - 1; i++)
    {
        // console.log(arr);
        minIndex = i;

        for (let j = i + 1; j < arr.length; j++)
        {
            if (arr[minIndex] > arr[j])
            {
                minIndex = j;
            }
            comparisions++;
        }

        if (minIndex != i)
        {
            temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
            swaps++;
        }

        /*
        arr[minIndex] += arr[i];
        arr[i] = arr[minIndex] - arr[i];
        arr[minIndex] -= arr[i];
        */
    }

    // console.log(arr);
    // console.log("Comparisions: " + comparisions + " Swaps: " + swaps + "\n");
    return arr;
}

// Time Complexity: Average, Worst: O(n^2) Quadratic Time ; Best: O(n) Linear Time
function bubbleSort(arr)
{
    let temp;
    let isSorted;

    for (let i = 0; i < arr.length; i++)
    {
        isSorted = true;

        for (let j = 0; j < arr.length - 1 - i; j++)
        {
            if (arr[j + 1] < arr[j])
            {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                isSorted = false;
            }
        }

        if (isSorted)
        {
            break;
        }
    }

    return arr;
}

// Time Complexity: Average, Worst: O(n^2)
function insertionSort(arr)
{
    let temp;

    /*
    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < arr.length; j++)
        {
            console.log(arr);
            if (arr[i] < arr[j])
            {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    */

    /*
    for (let i = 1; i < arr.length; i++)
    {
        for (let j = i; j >= 1; j--)
        {
            console.log(arr);
            if (arr[j] < arr[j - 1])
            {
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
            else
            {
                break;
            }
        }
    }
    */

    let swap;
    for (let i = 1; i < arr.length; i++)
    {
        swap = i;
        for (let j = i; j >= 1; j--)
        {
            console.log(arr);
            if (arr[j - 1] < arr[i])
            {
                break;
            }
            else
            {
                swap = j;
            }
        }

        temp = arr[swap];
        arr[swap] = arr[i];
        arr[i] = temp;

    }

    return arr;
}

function selectionSortTests()
{
    console.assert(JSON.stringify(selectionSort([6, 8, 14, 17, 23])) == JSON.stringify([6, 8, 14, 17, 23]), "Selection sort Sorted Array");
    console.assert(JSON.stringify(selectionSort([17, 23, 14, 6, 8])) == JSON.stringify([6, 8, 14, 17, 23]), "Selection sort Unsorted Array");
}

function bubbleSortTests()
{
    console.assert(JSON.stringify(bubbleSort([6, 8, 14, 17, 23])) == JSON.stringify([6, 8, 14, 17, 23]), "Bubble sort Sorted Array");
    console.assert(JSON.stringify(bubbleSort([17, 23, 14, 6, 8])) == JSON.stringify([6, 8, 14, 17, 23]), "Bubble sort Unsorted Array");
}

function insertionSortTests()
{
    // console.assert(JSON.stringify(insertionSort([6, 8, 14, 17, 23])) == JSON.stringify([6, 8, 14, 17, 23]), "Insertion sort Sorted Array");
    console.assert(JSON.stringify(insertionSort([17, 23, 14, 6, 8])) == JSON.stringify([6, 8, 14, 17, 23]), "Insertion sort Unsorted Array");
}

function main()
{
    selectionSortTests();
    bubbleSortTests();
    insertionSortTests();
}

main();
