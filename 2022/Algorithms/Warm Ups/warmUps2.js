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

// n = 1 return 1 (1 penny)
// n = 99 return 9 (3 quarters, 2 dimes, 4 pennies)
// n = 67 return 6 (2 quarters, 1 dime, 1 nickel, 2 pennies)
function makingChange(n)
{
    // Math.floor();
    let numCoins;
    let count = 0;
    let denominations = [25, 10, 5, 1];
    

    // while (n !== 0 && i < coins.length)

    for (let i = 0; i < denominations.length && n !== 0; i++)
    {
        numCoins = Math.floor(n / denominations[i]);
        n -= numCoins * denominations[i];
        count += numCoins;
    }

    return count;
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
// n = 1 return 1 (1 penny)
// n = 99 return 9 (3 quarters, 2 dimes, 4 pennies)
// n = 67 return 6 (2 quarters, 1 dime, 1 nickel, 2 pennies)
function makingChangeTests()
{
    console.assert(makingChange(1) === 1, "1 penny");
    console.assert(makingChange(99) === 9, "3 quarters, 2 dimes, 4 pennies");
    console.assert(makingChange(67) === 6, "67 cents: 2 quarters, 1 dime, 1 nickel, 2 pennies");
    console.assert(makingChange(75) === 3, "75 cents: 3 quarters");
}

function main()
{
    linearSearchTests();
    binarySearchTests();
    makingChangeTests();
}

main();
