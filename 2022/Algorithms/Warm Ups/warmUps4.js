// Time Complexity: O(n) Linear Time
// Space Complexity: O(n) (Total), O(1) (Auxiliary)
function secondLargest(arr)
{
    let second = -Infinity;
    let largest = -Infinity;

    if (arr.length === 1)
    {
        return arr[0];
    }
    else if (arr.length === 0)
    {
        return -Infinity;
    }

    /*
    if (arr[0] < arr[1])
    {
        second = arr[0];
        largest = arr[1];
    }
    else
    {
        second = arr[1];
        largest = arr[0];
    }
    */

    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] > largest) 
        {
            second = largest;
            largest = arr[i];
        }
        else if ((arr[i] > second && arr[i] !== largest) || second == -Infinity)
        {
            second = arr[i];
        }
        else if (largest === second && arr[i] !== second)
        {
            second = arr[i];
        }
    }

    return second;
}

function secondLargestTests()
{
    console.assert(secondLargest([4, 1, 2, 3, 5]) === 4, "First index");
    console.assert(secondLargest([1, 4, 2, 3, 5]) === 4, "Second index");
    console.assert(secondLargest([0, 2, 4, 3, 5]) === 4, "Middle index");
    console.assert(secondLargest([1, 2, 3, 4, 5]) === 4, "Second to last index");
    console.assert(secondLargest([-1, 2, 3, 5, 4]) === 4, "Last index");
    console.assert(secondLargest([-1, 5, 4, 3, 2]) === 4, "Second Largest is after largest");
    console.assert(secondLargest([5, 4, 3, 2, 1]) === 4, "Largest is the first element");
    console.assert(secondLargest([5]) === 5, "One element list");
    console.assert(secondLargest([]) === -Infinity, "Empty list");
    console.assert(secondLargest([4, 5]) === 4, "Two element list 1");
    console.assert(secondLargest([5, 4]) === 4, "Two element list 2");
    console.assert(secondLargest([5, 5, 5]) === 5, "Duplicates test 1");
    console.assert(secondLargest([5, 5, 4, 5, 5]) === 4, "Duplicates test 2");
}

function main()
{
    secondLargestTests();
}

main();
