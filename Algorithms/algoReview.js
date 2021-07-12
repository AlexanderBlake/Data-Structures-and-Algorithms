function toLowerCase(letter)
{
    let ascii = letter.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90)
    {
        ascii = ascii + 32;
        letter = String.fromCharCode(ascii);
    }
    return letter;
}

function toLowerCaseTests()
{
    let result;

    result = toLowerCase("");
    console.assert(result == "", "Expected: '' Actual: " + result);

    result = toLowerCase("a");
    console.assert(result == "a", "Expected: 'a' Actual: " + result);

    result = toLowerCase("A");
    console.assert(result == "a", "Expected: 'a' Actual: " + result);

    result = toLowerCase("$");
    console.assert(result == "$", "Expected: '$' Actual: " + result);
}


// Palindrome: Racecar, Mom, dad
function isPalindrome(word)
{
    // know the length word
    let wordLength = word.length;

    // loop half of word
    for (let i = 0; i < wordLength / 2; i++)
    {
        // chck first and last to be different 
            // return false
        if (toLowerCase(word[i]) !== toLowerCase(word[wordLength - 1 - i]))
        {
            return false;
        }
    }

    return true;
}

function isPalindromeTests()
{
    let result;

    result = isPalindrome("racecar");
    console.assert(result, "racecar");

    result = isPalindrome("Alex");
    console.assert(!result, "Alex");

    result = isPalindrome("Mom");
    console.assert(result, "Mom");
}

function isPrime(n)
{
    if (n === 1 || n === 2)
    {
        return true
    }
    else
    {
        for (let i = 2; i < n; i++)
        {
            if (n % i === 0)
            {
                return false;
            }
        }
        return true;
    }
}

function isPrimeTests()
{
    let result;

    result = isPrime(1);
    console.assert(result, 1);

    result = isPrime(2);
    console.assert(result, 2);

    result = isPrime(3);
    console.assert(result, 3);

    result = isPrime(4);
    console.assert(!result, 4);

    result = isPrime(5);
    console.assert(result, 5);

    result = isPrime(7);
    console.assert(result, 7);

    result = isPrime(21);
    console.assert(!result, 21);

    result = isPrime(22);
    console.assert(!result, 22);

    result = isPrime(23);
    console.assert(result, 23);
}

function listsEquivalent(arr1, arr2)
{
    if (arr1.length != arr2.length)
    {
        return false;
    }

    for (let i = 0; i < arr1.length; i++)
    {
        if (arr1[i] != arr2[i])
        {
            return false;
        }
    }

    return true;
}

function reorder(str1, str2, str3)
{
    let temp;

    if (str2 < str1)
    {
        temp = str1;
        str1 = str2;
        str2 = temp;
    }
    if (str3 < str2)
    {
        temp = str3;
        str3 = str2;
        str2 = temp;
    }
    if (str2 < str1)
    {
        temp = str1;
        str1 = str2;
        str2 = temp;
    }

    return [str1, str2, str3];
}

function reorderTests()
{
    let result;

    result = reorder("apple", "bat", "cat");
    console.assert(listsEquivalent(result, ["apple", "bat", "cat"]), "Test 1: " + result);

    result = reorder("apple", "cat", "bat");
    console.assert(listsEquivalent(result, ["apple", "bat", "cat"]), "Test 2: " + result);

    result = reorder("bat", "apple", "cat");
    console.assert(listsEquivalent(result, ["apple", "bat", "cat"]), "Test 3: " + result);

    result = reorder("bat", "cat", "apple");
    console.assert(listsEquivalent(result, ["apple", "bat", "cat"]), "Test 4: " + result);

    result = reorder("cat", "apple", "bat");
    console.assert(listsEquivalent(result, ["apple", "bat", "cat"]), "Test 5: " + result);

    result = reorder("cat", "bat", "apple");
    console.assert(listsEquivalent(result, ["apple", "bat", "cat"]), "Test 6: " + result);
}

function infiniteLoop()
{
    let x;
    while (true)
    {
        console.log("Hello World");
    }

    for (let i = 0; i > -1; i++)
    {
        console.log("Hello World");
    }

    do
    {
        console.log("Hello World");
    } while (true);
}

function stackOverflow()
{
    console.log("Hello World");
    stackOverflow();
}

function secondHighest(arr)
{
    if (arr.length < 2)
    {
        return -1;
    }

    if (arr[0] < arr[1])
    {
        highest = arr[1];
        sHighest = arr[0];
    }
    else
    {
        highest = arr[0];
        sHighest = arr[1];
    }

    for (let i = 2; i < arr.length; i++)
    {
        if (arr[i] > highest)
        {
            sHighest = highest;
            highest = arr[i];
        }

        else if (arr[i] > sHighest)
        {
            sHighest = arr[i];
        }
    }

    return sHighest;
}

// Write numbers in numerical order if the number is divisible by 3 say fizz, if the number is divisible by 5 say buzz, and by both say fizzbuzz
// 1, 2, fizz, 4, buzz, fizz, 7, ..., n
// Return string
// Time Complexity: O(n)
// Space Complexity: Total: O(n), Auxilary: O(1)
function fizzBuzz(n)
{
    // n = 3 => "1 , 2 , fizz"
    let isFizz;
    let s = "";

    for (let i = 1; i <= n; i++)
    {
        isFizz = false;

        if (i % 3 == 0) 
        {
            s += "fizz";
            isFizz = true;
        }
        
        if (i % 5 == 0)
        {
            s += "buzz";
        }
        else if (!isFizz)
        {
            s += i;
        }

        if (i != n) 
        {
            s += ", ";
        }
    }

    return s;   
}

function fizzBuzzTests()
{
    console.assert(fizzBuzz(-1) == "", fizzBuzz(-1));
    console.assert(fizzBuzz(0) == "", fizzBuzz(0));
    console.assert(fizzBuzz(1) == "1", fizzBuzz(1));
    console.assert(fizzBuzz(2) == "1, 2", fizzBuzz(2));
    console.assert(fizzBuzz(3) == "1, 2, fizz", fizzBuzz(3));
    console.assert(fizzBuzz(4) == "1, 2, fizz, 4", fizzBuzz(4));
    console.assert(fizzBuzz(5) == "1, 2, fizz, 4, buzz", fizzBuzz(5));
    console.assert(fizzBuzz(6) == "1, 2, fizz, 4, buzz, fizz", fizzBuzz(6));
    console.assert(fizzBuzz(7) == "1, 2, fizz, 4, buzz, fizz, 7", fizzBuzz(7));
    console.assert(fizzBuzz(15) == "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz", fizzBuzz(15));
}

// Write a function that makes the most money buying and selling stocks knowing what the prices will be for the week
// Long positions only, no short selling
// No commissions, unlimited capital, you can only own 1 share at most, unlimited amount of trades
// You must close all positions by the weekend
// Return the max profit (loss)
function stocks(prices)
{
    let profit = 0;

    if (prices.length !== 5)
    {
        return -1;
    }

    for (let i = 0; i < prices.length - 1; i++)
    {
        if (prices[i] <= 0)
        {
            return -1;
        }

        if (prices[i] < prices[i + 1])
        {
            profit += prices[i + 1] - prices[i];
        }
    }

    return profit;
}

function stocksTests()
{
    let result;

    console.assert(stocks([]) == -1, "0 day week");
    console.assert(stocks([1, 2, 3, 4]) == -1, "4 day week");
    console.assert(stocks([0, 1, 2, 3, 5]) == -1, "$0 stock");
    console.assert(stocks([-1, 1, 2, 3, 5]) == -1, "-$1 stock");
    console.assert(stocks([0, 1, 2, 3, 5, 6]) == -1, "6 day week");

    console.assert(stocks([20, 40, 60, 80, 100]) == 80, "Should return $80");
    console.assert(stocks([100, 80, 60, 40, 20]) == 0, "Should return $0");

    result = stocks([100, 80, 90, 70, 95]);
    console.assert(result == 35, "Expected: $35, Actual: $" + result);
    result = stocks([80, 100, 30, 95, 75]);
    console.assert(result == 85, "Expected: $85, Actual: $" + result);
}

function reverseArray(arr)
{
    let temp;

    for (let i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return arr;
}

function main()
{
    toLowerCaseTests();
    isPrimeTests();
    isPalindromeTests();
    reorderTests();

    // console.log(secondHighest([1, 2, 5, 2, 3, 6]));

    fizzBuzzTests();
    stocksTests();

    console.log(reverseArray([1, 2, 3, 4]));
}

main();
