// How do you find the duplicate number on a given integer array?
// Space Complexity: (Total: O(n) Linear Space), (Auxillary: O(1) Constant Space)
// Time Complexity: O(n^2) Quadratic Time
/*
function findDuplicate(arr)
{
    for (let i = 0; i < arr.length - 1; i++)
    {
        for (let j = i + 1; j < arr.length; j++)
        {
            if (arr[j] == arr[i])
            {
                return arr[j];
            }
        }
    }
    return -1;
}
*/

// How do you find the duplicate number on a given integer array?
// Space Complexity: (Total: O(n) Linear Space), (Auxillary: O(1) Constant Space)
// Time Complexity: O(nlog(n) + n) = Best: O(n log n), O(n^2 + n) = Simple Sort: O(n^2)
/*
function findDuplicate(arr)
{
    // Time Complexity: Written: O(n^2)
    for (let i = 0; i < arr.length - 1; i++)
    {
        for (let j = i + 1; j < arr.length; j++)
        {
            if (arr[j] < arr[i])
            {
                arr[i] += arr[j];
                arr[j] = arr[i] - arr[j];
                arr[i] -= arr[j];
            }
        }
    }

    // Time Complexity: O(n log n)
    arr.sort();

    // Time Complexity: O(n)
    for (let i = 0; i < arr.length - 1; i++)
    {
        if (arr[i] == arr[i + 1])
        {
            return arr[i];
        }
    }

    return -1;
}
*/

// How do you find the duplicate number on a given integer array?
// Space Complexity: O(n + 1 + 1 + n) = O(2n + 2) = O(n) Linear Space
// Time Complexity: O(n) Linear Time
function findDuplicate(arr)
{
    let myMap = {};

    for (let i = 0; i < arr.length; i++)
    {
        if (!myMap[arr[i]])
        {
            myMap[arr[i]] = true;
        }
        else
        {
            return arr[i];
        }
    }

    /*
    let myMap = new Map();
    
    for (let i = 0; i < arr.length; i++)
    {
        if (!myMap.has(arr[i]))
        {
            myMap.set(arr[i], true);
        }
        else
        {
            return arr[i];
        }
    }
    */

    return -1;
}

// How do you check if a string contains only digits?
function onlyDigits(myString)
{
    for (let i = 0; i < myString.length; i++)
    {
        let num = myString.charCodeAt(i);
        if (num > 57 || num < 47)
        {
            return false;
        }
    }

    return true;

    /*
    for (let char of myString)
    {
        let isNum = false;
        for (let i = 0; i < 10; i++)
        {
            if (char == i)
            {
                isNum = true;
                break;
            }
        }

        if (!isNum)
        {
            return false;
        }
    }
    return true;
    */
}

// Time Complexity: O(n) Linear Time
// Space Complexity: (Total: O(n) Linear Space), (Auxillary: O(1) Constant Space)
function isBalanced(expression)
{
    let count = 0;
    let checkParentheis = false;

    for (let i = 0; i < expression.length; i++)
    {
        if (expression[i] == '(')
        {
            checkParentheis = true;
            count++;
        }
        else if (expression[i] == ')')
        {
            if (!checkParentheis) 
            {
                count--;
            }
            else
            {
                return false;
            }
        }
        else if (expression[i] != ' ')
        {
            checkParentheis = false;
        }

        if (count == -1)
        {
            return false;
        }
    }

    return count == 0;
}

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
    return x == y && x;
}

function challenge3(x, y, z)
{
    /* if (x)
    {
        y = z;
    }
    else
    {
        y = !z;
    }
    */
    y = x == z;
}

function findDuplicateTest()
{
    console.assert(findDuplicate([1, 1, 2, 3, 4, 5]) == 1, "1 side by side");
    console.assert(findDuplicate([1, 2, 3, 3, 4, 5]) == 3, "3 side by side");
    console.assert(findDuplicate([1, 2, 3, 4, 5, 5]) == 5, "5 side by side");
    console.assert(findDuplicate([1, 2, 3, 4, 5, 1]) == 1, "1 at front and end");
    console.assert(findDuplicate([1, 2, 3, 4, 2, 5]) == 2, "2 not side by side");
    console.assert(findDuplicate([1]) == -1, "No duplicates");
    console.assert(findDuplicate([1, 2, 3, 4, 5]) == -1, "No duplicates");
    console.assert(findDuplicate([1, 1]) == 1, "[1, 1]");
    console.assert(findDuplicate([1, 5, 4, 2, 3, 2]) == 2, "2 Random Order");
}

function onlyDigitsTests()
{
    console.assert(onlyDigits("12345"), "Only digits");
    console.assert(!onlyDigits("12a45"), "Non-digit in the middle");
    console.assert(!onlyDigits("!12345"), "Non-digit at the front");
    console.assert(!onlyDigits("1245|"), "Non-digit at the end");
    console.assert(!onlyDigits("a$|"), "Only Non-digits");
}

function isBalancedTests()
{
    console.assert(!isBalanced("("), "Opening parenthesis only");
    console.assert(!isBalanced("2 * ( 8 + 2"), "Unbalanced Expression 1");
    console.assert(!isBalanced("(2 + 6) * 5 + 6)"), "Unbalanced Expression 2");
    console.assert(!isBalanced(")(2 + 6) * 5 + 6("), "Unbalanced Expression 3");
    console.assert(!isBalanced("()"), "Opening & Closing parenthesis only 1");
    console.assert(!isBalanced("( )"), "Opening & Closing parenthesis only 2");
    // console.assert(!isBalanced("( + )"), "Opening & Closing parenthesis only 3");
    console.assert(isBalanced("(5 + 6)"), "Balanced Complete Expression 1");
    console.assert(isBalanced("1 / (2 + (3 * 4))"), "Balanced Expression 2");
}

function main()
{
    findDuplicateTest();
    onlyDigitsTests();
    isBalancedTests();
}

main();
