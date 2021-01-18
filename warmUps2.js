// Write numbers in numerical order if the number is divisible by 3 say fizz, if the number is divisible by 5 say buzz, and by both say fizzbuzz
// 1, 2, fizz, 4, buzz, fizz, 7, ..., 14, fizzbuzz, ..., n
// 10 % 7 == 3
function fizzBuzz(n) {
    let myString = "";
    let printNum;

    for (let i = 1; i <= n; i++) {
        printNum = true;

        if (i % 3 == 0) {
            myString += "fizz";
            printNum = false;
        }

        if (i % 5 == 0) {
            myString += "buzz";
            printNum = false;
        } else if (printNum) {
            myString += i;
        }

        if (i < n) {
            myString += ", ";
        }
    }

    return myString;
}

function reverseString(myString) {
    let reverseWord = "";

    for (let i = myString.length - 1; i >= 0; i--) {
        reverseWord += myString[i];
    }

    return reverseWord;
}

function cleanString(myString) {
    let newString = "";

    for (let i = 0; i < myString.length; i++) {
        if (myString[i] != " ") {
            let ascii = myString.charCodeAt(i);
            if (ascii >= 97) {
                newString += String.fromCharCode(ascii - 32);
            } else {
                newString += myString[i];
            }
        }
    }

    return newString;
}

function isPalindrome(myString) {
    myString = cleanString(myString);
    return myString == reverseString(myString);

    /*
    for (let i = 0; i < myString.length / 2; i++) {
        if (myString[i] != myString[myString.length - 1 - i]) {
            return false;
        }
    }
    return true;*/
}

function fizzBuzzTests() {
    console.assert(fizzBuzz(-1) == "", -1);
    console.assert(fizzBuzz(0) == "", 0);
    console.assert(fizzBuzz(1) == "1", 1);
    console.assert(fizzBuzz(2) == "1, 2", 2);
    console.assert(fizzBuzz(3) == "1, 2, fizz", 3);
    console.assert(fizzBuzz(5) == "1, 2, fizz, 4, buzz", 5);
    console.assert(fizzBuzz(15) == "1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz", 15);
}

function isPalindromeTests() {
    console.assert(isPalindrome(""), "<Empty String>");
    console.assert(isPalindrome("a"), "a");
    console.assert(!isPalindrome("ab"), "ab");
    console.assert(isPalindrome("aa"), "aa");
    console.assert(isPalindrome("racecar"), "racecar");
    console.assert(isPalindrome("Mom"), "Mom");
    console.assert(isPalindrome("taco cat"), "taco cat");
    console.assert(!isPalindrome("alex"), "alex");
}

function main() {
    fizzBuzzTests();
    isPalindromeTests();
}

main();
