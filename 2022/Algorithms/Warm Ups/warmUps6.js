function challenge1(x, y, z)
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

function challenge2(x, y, z)
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

    return x && y;
}

function challenge3(x, y, z)
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

    y = x === z;
}


// 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
// Space Complexity: O(1) Constant Excluding the string
function fizzBuzz(n)
{
    let myString = "";

    for (let i = 1; i <= n; i++)
    {
        if (i % 15 === 0)
        {
            myString += "fizzbuzz";
        }
        else if (i % 3 === 0)
        {
            myString += "fizz"
        }
        else if (i % 5 === 0)
        {
            myString += "buzz"
        }
        /*
        if (i % 3 === 0)
        {
            if (i % 5 !== 0)
            {
                myString += "fizz";
            }
            else
            {
                myString += "fizzbuzz";
            }
        }
        else if (i % 5 === 0)
        {
            myString += "buzz";
        }
        else
        {
            myString += i;
        }
        */

        if (i < n)
        {
            myString += ", ";
        }
    }

    return myString;
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// fibonacciRec(8) -> 13
function fibonnaciRec(n)
{
    if (n === 0)
    {
        return 0;
    }
    if (n < 3)
    {
        return 1;
    }

    return fibonnaciRec(n - 1) + fibonnaciRec(n - 2);
}

// Time Complexity: O(n) Linear Time
function containsDuplicate(arr)
{
    let dupes = new Set();

    for (let i = 0; i < arr.length; i++) 
    {
        if (dupes.has(arr[i])) {
            return true;
        } else {
            dupes.add(arr[i]);
        }
    }
    return false;
}

/*
// Time Complexity: O(n^2) Quadratic Time
function containsDuplicate(arr)
{
    for (let i = 0; i < arr.length - 1; i++)
    {
        for (let j = i + 1; j < arr.length; j++)
        {
            if (arr[i] == arr[j])
            {
                return true;
            }
        }
    }

    return false;
}
*/

// Time Complexity: O(n) Linear Time
function linearSearch(arr, target)
{
    let index = -1;

    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] === target)
        {
            index = i;
            // return index;
            break;
        }
    }

    return index;
}

function binarySearch(arr, target)
{
    let start = 0;
    let end = arr.length - 1;

    let middle = Math.round((start + end) / 2);

    while (arr[middle] != target && start <= end) {
        if (arr[middle] > target)
        {
            end = middle - 1;
        }
        else
        {
            start = middle + 1;
        }

        middle = Math.round((start + end) / 2);
    }

    if (arr[middle] === target)
    {
        return middle;
    }
    return -1;
}

function linearSearchTests()
{
    console.assert(linearSearch([5, 1, 4, 3, 2], 4) === 2);
    console.assert(linearSearch([-5, 1, 4, -3, 2], 4) === 2);
    console.assert(linearSearch([-5, 1, -4, -3, 2], 4) === -1);
    console.assert(linearSearch([-5, 1, 4, 4, -3, 2], 4) === 2);
}

function binarySearchTests()
{
    console.assert(binarySearch([1, 3, 24, 99, 100], 4) === -1);
    console.assert(binarySearch([1, 3, 24, 99, 100], 24) === 2);
}

function swap()
{
    let a = 5;
    let b = 24;

    // a = a + b;
    a += b;

    b = a - b;

    // a = a - b;
    a -= b;

    console.log(a);
    console.log(b);
}

function containsDuplicateTests()
{
    console.assert(containsDuplicate([1, 1, 2, 3, 4, 5]));
    console.assert(!containsDuplicate([1, 2, 3, 4, 5]));
    console.assert(containsDuplicate([5, 2, 3, 1, 5]));
}


function main()
{
    containsDuplicateTests();
    linearSearchTests();
    binarySearchTests();

    /*
    let mySet = new Set();

    mySet.add(1);
    mySet.add("1");

    console.log(1 == "1");
    console.log(1 === "1");
    console.log(mySet);
    */

    // swap();


    /*
    let a = 5;

    // console.log(a++);
    console.log(a);
    a += 1;

    console.log(++a);
    */
}

main();
