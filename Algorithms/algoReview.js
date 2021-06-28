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

function main()
{
    toLowerCaseTests();
    isPrimeTests();
    isPalindromeTests();
    reorderTests();

    console.log(secondHighest([1, 2, 5, 2, 3, 6]));
}

main();
