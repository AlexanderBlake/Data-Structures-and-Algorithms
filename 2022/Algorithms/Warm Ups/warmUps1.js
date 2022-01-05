// Write numbers in numerical order if the number is divisible by 3 say fizz, if the number is divisible by 5 say buzz, and by both say fizzbuzz
// 1, 2, fizz, 4, buzz, fizz, 7, ..., n
function fizzBuzz(n)
{

    let myString = "";
    if (n > 0)
    {
        for (let i = 1; i <= n; i++)
        {   
            if (i % 15 === 0)
            {
                myString += "fizzbuzz";
            }
            else if (i % 3 === 0)
            {
                myString += "fizz";
            }
            else if (i % 5 === 0)
            {
                myString += "buzz";
            }
            else
            {
                myString += i;
            }

            if (i !== n)
            {
                myString += ", ";
            }

            /*
            if (i % 3 === 0 || i % 5 === 0) 
            {
                if (i % 3 === 0)
                {
                    myString += "fizz";
                }
                if (i % 5 === 0)
                {
                    myString += "buzz";
                }
            }
            else
            {
                myString += i;
            }

            if (i !== n)
            {
                myString += ", ";
            }
            */
        }
    }
    return myString;
}


function fizzBuzzRec(n)
{
    if (n <= 0)
    {
        return "";
    }
    else if (n === 1)
    {
        return "1";
    }
    else if (!(n % 15))
    {
        return fizzBuzzRec(n - 1) + ", fizzbuzz";
    }
    else if (!(n % 3))
    {
        return fizzBuzzRec(n - 1) + ", fizz";
    }
    else if (!(n % 5))
    {
        return fizzBuzzRec(n - 1) + ", buzz";
    }
    else
    {
        return fizzBuzzRec(n - 1) + ", " + n;
    }
}


function fizzBuzzRec(n, myString = "")
{
    if (n <= 0)
    {
        return "";
    }
    else if (n === 1)
    {
        return "1, " + myString.slice(0, -2);
    }

    if (!(n % 15))
    {
        myString = "fizzbuzz, " + myString;
    }
    else if (!(n % 3))
    {
        myString = "fizz, " + myString;
    }
    else if (!(n % 5))
    {
        myString = "buzz, " + myString;
    }
    else
    {
        myString = n + ", " + myString;
    }

    return fizzBuzzRec(n - 1, myString);
}


// Write a function that makes the most money buying and selling stocks knowing what the prices will be for the week
// Long positions only, no short selling
// No commissions, unlimited capital, you can only own 1 share at most, unlimited amount of trades
// You must close all positions by the weekend
// Return the max profit (loss)
function stocks(prices)
{

}

// Return whether a word is a palindrome: racecar, mom, dad
// Alex xelA
function isPalindrome(word)
{
    if (word.length <= 1)
    {
        return word.length !== 0;
    }

    if (word[0] === word[word.length - 1])
    {
        if (word.length === 2)
        {
            return true;
        }
        
        return isPalindrome(word.substring(1, word.length - 1));
    }
    return false;
}


/*
function isPalindrome(word)
{
    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; i--)
    {
        reversedWord += word[i];
    }

    return reversedWord === word;

    if (word === "")
    {
        return false;
    }
    for (let i = 0; i < word.length / 2; i++)
    {
        if (word[i] !== word[word.length - 1 - i]) 
        {
            return false;
        }
    }
    return true;
}
*/

function isPalindromeTest()
{
    console.assert(isPalindrome("tacocat") === true, "tacocat");
    console.assert(isPalindrome("baab") === true, "baab");
    console.assert(isPalindrome("aba") === true, "aba");
    console.assert(isPalindrome("a") === true, "a");

    console.assert(isPalindrome("BlakeB") === false, "BlakeB");
    console.assert(isPalindrome("") === false, "<Empty String>");
    console.assert(isPalindrome("Blake") === false, "Blake");
    console.assert(isPalindrome("123") === false, "<string> 123");
}

function fizzBuzzTest()
{
    console.assert(fizzBuzz(-1) === "", -1);
    console.assert(fizzBuzz(0) === "", 0);
    console.assert(fizzBuzz(8) === "1, 2, fizz, 4, buzz, fizz, 7, 8", 8);
    console.assert(fizzBuzz(15) === "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz", 15);
}

function stocksTest()
{
    console.assert(stocks([]) == -1, "Empty list");
    console.assert(stocks([0, 0, 0, 0, 0]) == -1, "All zeros");
    console.assert(stocks([2, -1, 1, 2, 3]) == -1, "One negative value");
    console.assert(stocks([2, 3, 0, 4, 5]) == -1, "One zero value");

    console.assert(stocks([1, 1, 1, 1, 1]) == 0, "All the same value");
    console.assert(stocks([100, 80, 60, 40, 20]) == 0, "Decreasing");

    console.assert(stocks([100, 1, 100, 1, 100]) == 198, "Oscillating");
    console.assert(stocks([20, 40, 60, 80, 100]) == 80, "Increasing");
    console.assert(stocks([20, 32, 10, 8, 76]) == 80, "Random");
    console.assert(stocks([20, 32, 10, 8, 7]) == 12, "Random 2");
}

function main()
{
    isPalindromeTest();
    // fizzBuzzTest();
    // stocksTest();

    /*
    console.log(fizzBuzzRec(-1));
    console.log(fizzBuzzRec(0));
    console.log(fizzBuzzRec(8));
    console.log(fizzBuzzRec(15));
    */

    // console.log("Alex".substring(1, 4 - 1));
}

main();