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
        console.log(arr);
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

    console.log(arr);
    console.log("Comparisions: " + comparisions + " Swaps: " + swaps + "\n");
    return arr;
}

function selectionSortTests()
{
    console.assert(JSON.stringify(selectionSort([6, 8, 14, 17, 23])) == JSON.stringify([6, 8, 14, 17, 23]), "Sorted Array");
    console.assert(JSON.stringify(selectionSort([17, 23, 14, 6, 8])) == JSON.stringify([6, 8, 14, 17, 23]), "Unsorted Array");
}

function main()
{
    selectionSortTests();
}

main();
