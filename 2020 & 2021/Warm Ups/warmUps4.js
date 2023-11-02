// 1, 1, 2, 3, 5, 8, 13
// n = 7 return 13
// Time Complexity: O(2^n)
// Space Complexity: O(n)
function fibonacciRec(n)
{
    if (n <= 2)
    {
        return 1;
    }
    console.log(n);

    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}

// Time Complexity: O(n)
// Space Complexity: O(1)
function fibonacciIter(n)
{
    let temp;
    let prev = 1;
    let current = 1;

    for (let i = 2; i < n; i++)
    {
        temp = prev + current;
        prev = current;
        current = temp;
        console.log(i);
    }

    return current;
}

// 5! = 5 * 4 * 3 * 2 = 120
// 0! = 1
// Time Complexity: O(n)
// Space Complexity: O(n)
function factorialRec(n)
{
    if (n < 2)
    {
        return 1;
    }
    return n * factorialRec(n - 1);
}

// Time Complexity: O(n)
// Space Complexity: O(1)
function factorialIter(n)
{
    let factorial = 1;

    while (n > 1) 
    {
        factorial *= n--;
    }
    return factorial;
}

// 4 & 6 -> 12
// 4: 4, 8, 12
// 6: 6, 12
function lcm(num1, num2)
{
    return (num1 * num2) / gcf(num1, num2);
}

// 4 & 6 -> 2
// 4: 1, 2, 4
// 6: 1, 2, 3, 6
// 40 & 48 -> 8
// 40: 1, 2, 4, 5, 8, 10, 20, 40
// 48: 1, 2, 3, 4, 6, 8, 12, 24, 48

// 4 & 8 -> 4
function gcf(num1, num2)
{
    let greatestFactor = 1;
    for (let i = 2; i <= num1; i++)
    {
        if (num1 % i == 0 && num2 % i == 0)
        {
            greatestFactor = i;
        }
    }

    return greatestFactor;
}

// y = 1 + 2 + 3 + ...
// If the sum mentioned above, y, adds up to a perfect square (ex. 16, 25) then the perfect square is a magic square
// The first magic square is 1
function magicSquare(num)
{
    let count = 0;
    let sum = 1;

    for (let i = 2; count < num; i++)
    {
        if (Math.floor(Math.sqrt(sum)) == Math.sqrt(sum))
        {
            console.log(sum);
            count++;
        }

        sum += i;
    }    
}

// Time Complexity: O(n)
// No sorting the arr
function secondHighest(arr)
{
    let highest;
    let second;
    let current;

    if (arr.length < 2)
    {
        return null;
    }

    if (arr[0] > arr[1])
    {
        highest = arr[0];
        second = arr[1];
    } 
    else
    {
        highest = arr[1];
        second = arr[0];
    }
    
    for (let i = 2; i < arr.length; i++)
    {
        current = arr[i];

        if (current > highest)
        {
            second = highest;
            highest = current;
        }
        else if (current > second)
        {
            second = current;
        }
    }

    return second;
}

/*
// Time Complexity: O(n) Linear Time, T(n) = 5n
function isPalindrome(string) {
    let reversedString = "";

    if (string && typeof string === "string")
        {
            string = string.toUpperCase();

        if(string.indexOf(" ") >= 0)
            {
                string = string.replace(/\s+/g, '');
            }
        reversedString = string.split("").reverse().join("");

        if(reversedString === string)
            return true

        else return false;
        }
}
*/

/*
Time Complexity: O(n) Linear Time, T(n) = n / 2
Space Complexity: Total O(n) Linear Space, Auxilary O(1) Constant Space
*/
function isPalindrome(myString) 
{
    let frontChar;
    let backChar;
    let backIndex = myString.length - 1;

    for (let i = 0; i < Math.floor(myString.length / 2); i++)
    {
        frontChar = myString.charCodeAt(i);
        backChar = myString.charCodeAt(backIndex);

        while (frontChar === 32) {
            frontChar = myString.charCodeAt(++i);
        }

        while (backChar === 32) {
            backChar = myString.charCodeAt(--backIndex);
        }

        if (frontChar !== backChar && Math.abs(frontChar - backChar) !== 32)
        {
            return false;
        }
        backIndex--;
    }
    return true;
}

function commonChars(words) {
    let map = new Map();
    let common = []

    for (let i = 0; i < words.length; i++)
    {
        for (let j = 0; j < words[i].length; j++)
        {
            if (map.has(words[i][j]))
            {
                map.set(words[i][j], map.get(words[i][j]) + 1);
            }
            else
            {
                map.set(words[i][j], 1);
            }
        }
    }

    let times;
    for (let [key, value] of map)
    {
        times = Math.floor(value / words.length);
        for (let i = 0; i < times; i++)
        {
            common.push(key);
        }
    }

    return common;
}

function commonCharsTests() {
    // ['e', 'l', 'l']
    console.log(commonChars(['bella', 'label', 'roller']));

    // ['c', 'o']
    console.log(commonChars(['cool', 'lock', 'cook']));
}

function secondHighestTests(arr)
{
    console.assert(secondHighest([1]) === null);
    console.assert(secondHighest([1, 2]) === 1);
    console.assert(secondHighest([1, 2, 3]) === 2);
    console.assert(secondHighest([1, 2, 3, 4]) === 3);
    console.assert(secondHighest([4, 3, 2, 1]) === 3);
    console.assert(secondHighest([1, 4, 3, 2]) === 3);
}

function isPalindromeTests()
{
    console.assert(isPalindrome("race car"), "Includes a space");
    console.assert(isPalindrome("racecar"), "Lowercase");
    console.assert(isPalindrome("RaceCar"), "Mixedcase");
    console.assert(isPalindrome("rAcECar"), "Mixedcase");
    console.assert(isPalindrome("RACECAR"), "Uppercase");
    console.assert(!isPalindrome("race"), "Not a palindrome");
}

function main()
{
    /*
    console.log(factorialIter(0));
    console.log(factorialIter(1));
    console.log(factorialIter(2));
    console.log(factorialIter(5));

    console.log(fibonacciIter(1));
    console.log(fibonacciIter(2));
    console.log(fibonacciIter(3));
    console.log(fibonacciIter(7));

    console.log(factorialRec(0));
    console.log(factorialRec(1));
    console.log(factorialRec(2));
    console.log(factorialRec(5));
    */

    /*
    console.log(fibonacciRec(1));
    console.log(fibonacciRec(2));
    console.log(fibonacciRec(3));
    console.log(fibonacciRec(7));
    */

    // console.log(fibonacciIter(1000));
    // console.log(fibonacciRec(1000));

    /*
    magicSquare(4);
    console.log(lcm(4, 6));
    console.log(gcf(4, 6));
    console.log(gcf(40, 48));
    console.log(gcf(4, 8));
    */

    isPalindromeTests();
    secondHighestTests();
    commonCharsTests();
}

main();
