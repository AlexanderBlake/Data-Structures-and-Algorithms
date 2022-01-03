// Write numbers in numerical order if the number is divisible by 3 say fizz, if the number is divisible by 5 say buzz, and by both say fizzbuzz
// 1, 2, fizz, 4, buzz, fizz, 7, ..., n
function fizzBuzz(n) {
    let flag;
    let myString = "";
    
    for (let i = 1; i <= n; i++) {
        flag = true;

        if (i % 3 == 0) {
            myString += "fizz";
            flag = false;
        } if (i % 5 == 0) {
            myString += "buzz";
            flag = false;
        } else if (flag) {
            myString += i;
        }

        if (i != n) {
            myString += ", ";
        }
    }
    return myString;
}

// Write a function that makes the most money buying and selling stocks knowing what the prices will be for the week
// Long positions only, no short selling
// No commissions, unlimited capital, you can only own 1 share at most, unlimited amount of trades
// You must close all positions by the weekend
// Return the max profit (loss)
function stocks(prices) {
    if (prices.length == 0) {
        return -1;
    }

    let profit = 0;
    let costBasis = 0;

    for (let i = 0; i < prices.length; i++) {
        if (costBasis != 0) {
            profit += prices[i] - costBasis;
            costBasis = 0;
        }

        if (prices[i] <= 0) {
            return -1;
        } else if (prices[i] < prices[i + 1]) {
            costBasis = prices[i];
        }
    }
    return profit;
}

function reverseString(string) {
    let reverseWord = "";
    
    for (let i = string.length - 1; i >= 0; i--) {
        string[i] = string[i].toUpperCase();
        reverseWord += string[i];
    }

    return reverseWord;
}

// Return whether a word is a palindrome: racecar, mom, dad
// Alex xelA
function isPalindrome(word) {
    if (word && typeof(word) != 'number') {
        return reverseString(word) == word;
    }
    return false;
}

function isPalindromeTest() {
    console.assert(isPalindrome("tacocat") == true, "tacocat");
    console.assert(isPalindrome("baab") == true, "baab");
    console.assert(isPalindrome("a") == true, "a");

    console.assert(isPalindrome("Blake") == false, "Blake");
    console.assert(isPalindrome("") == false, "<Empty String>");
    console.assert(isPalindrome(null) == false, "<NULL>");
    console.assert(isPalindrome(123) == false, "<int> 123");
    console.assert(isPalindrome("123") == false, "<string> 123");
}

function fizzBuzzTest() {
    console.assert(fizzBuzz(-1) == "", -1);
    console.assert(fizzBuzz(0) == "", 0);
    console.assert(fizzBuzz(8) == "1, 2, fizz, 4, buzz, fizz, 7, 8", 8);
    console.assert(fizzBuzz(15) == "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz", 15);
}

function stocksTest() {
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

function main() {
    isPalindromeTest();
    fizzBuzzTest();
    stocksTest();
}

main();
