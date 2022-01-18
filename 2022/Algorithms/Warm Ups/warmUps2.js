// Time Complexity: O(n) T(n / 2)
// Space Complexity: Total: O(n) Auxillary: O(1)
function linearSearch(val, arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (val === arr[i])
        {
            return i;
        }
    }
    return -1;
}


// Time Complexity: O(log n)
// Space Complexity: Auxillary: O(1) Total: O(n)
function binarySearch(val, arr)
{
    let start = 0;
    let end = arr.length - 1;
    let mid;
    let midNum;

    while (start <= end)
    {
        mid = Math.floor((start + end) / 2);
        midNum = arr[mid];

        if (midNum === val)
        {
            return mid;
        }
        else if (midNum < val)
        {
            start = mid + 1;
        }
        else
        {
            end = mid - 1;
        }
    }

    return -1;
}

function linearSearchTests()
{
    console.assert(linearSearch(4, [4, 24, 5, 8]) === 0, "First Index");
    console.assert(linearSearch(24, [4, 24, 5, 8]) === 1, "Second Index");
    console.assert(linearSearch(5, [4, 24, 5, 8]) === 2, "Third Index");
    console.assert(linearSearch(-8, [4, 24, 5, -8]) === 3, "Last Index");
    console.assert(linearSearch(12, [4, 24, 5, 8]) === -1, "Not in array");
}

function binarySearchTests()
{
    console.assert(binarySearch(12, [4, 5, 8, 24]) === -1, "Even Expected: -1, Actual: " + binarySearch(12, [4, 5, 8, 24]));
    console.assert(binarySearch(4, [4, 5, 8, 24]) === 0, "Even Expected: 0, Actual: " + binarySearch(4, [4, 5, 8, 24]));
    console.assert(binarySearch(5, [4, 5, 8, 24]) === 1, "Even Expected: 1, Actual: " + binarySearch(5, [4, 5, 8, 24]));
    console.assert(binarySearch(8, [4, 5, 8, 24]) === 2, "Even Expected: 2, Actual: " + binarySearch(8, [4, 5, 8, 24]));
    console.assert(binarySearch(24, [4, 5, 8, 24]) === 3, "Even Expected: 3, Actual: " + binarySearch(24, [4, 5, 8, 24]));

    console.assert(binarySearch(12, [4, 5, 8, 9, 24]) === -1, "Odd Expected: -1, Actual: " + binarySearch(12, [4, 5, 8, 9, 24]));
    console.assert(binarySearch(4, [4, 5, 8, 9, 24]) === 0, "Odd Expected: 0, Actual: " + binarySearch(4, [4, 5, 8, 9, 24]));
    console.assert(binarySearch(5, [4, 5, 8, 9, 24]) === 1, "Odd Expected: 1, Actual: " + binarySearch(5, [4, 5, 8, 9, 24]));
    console.assert(binarySearch(8, [4, 5, 8, 9, 24]) === 2, "Odd Expected: 2, Actual: " + binarySearch(8, [4, 5, 8, 9, 24]));
    console.assert(binarySearch(9, [4, 5, 8, 9, 24]) === 3, "Odd Expected: 3, Actual: " + binarySearch(9, [4, 5, 8, 9, 24]));
    console.assert(binarySearch(24, [4, 5, 8, 9, 24]) === 4, "Odd Expected: 4, Actual: " + binarySearch(24, [4, 5, 8, 9, 24]));
    
}

function main()
{
    linearSearchTests();
    binarySearchTests();
}

main();
