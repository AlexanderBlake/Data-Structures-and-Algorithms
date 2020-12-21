// Write numbers in numerical order if the number is divisible by 3 say fizz, if the number is divisible by 5 say buzz, and by both say fizzbuzz
// 1, 2, fizz, 4, buzz, fizz, 7, ..., n
function fizzBuzz(n) {
    let myString = "";
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0) {
            myString += "fizz";
        }
        if (i % 5 == 0) {
            myString += "buzz";
        }
    }
    return myString;
}

// Write a function that makes the most money buying and selling stocks knowing what the prices will be for the week
// Long positions only, no short selling
function stocks(prices) {

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
    console.assert(fizzBuzz(8) == "1, 2, fizz, 4, buzz, fizz, 7, 8", console.log(fizzBuzz(8)));
    console.assert(fizzBuzz(0) == "", 0);
}

function main() {
    isPalindromeTest();
    fizzBuzzTest();
}

main();
