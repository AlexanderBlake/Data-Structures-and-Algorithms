function toLowerCase(letter) {
    if (letter.length > 1) {
        return false;
    }

    let charCode = letter.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(charCode + 32);
    }
    return letter;
}

// Time Complexity: O(n) Linear Time
// Space Complexity: O(n) Total O(1) Auxillary
function isPalindrome(word) {
    // get the length of the word
    // do a for loop that goes from the end of the word to the beginning of the word and 
    // pushes that to an array
    // then I want to compare the new array to the word and see if they are equal
    // let x = [1, 2, 3];
    // let y = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

    if (word.length === 0) { 
        return false;
    }

    for (let i = 0; i < word.length / 2; i++) {
        if (toLowerCase(word[i]) != toLowerCase(word[word.length - 1 - i])) {
            return false;
        }
    }
    return true;
}

// Time Complexity: O(log n)
// Space Complexity: O(1) Constant Space
function isPrime(n) {
    if (n <= 3) {
        return n > 1;
    } else if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    let count = 5;

    while (Math.pow(count, 2) <= n) {
        if (n % count === 0 || n % (count + 2) === 0) {
            return false;
        }
        count += 6;
    }
    return true;
}

// Time Compelexity: O(n^2)
// Space Complexity: O(1) Constant Space
function reorder(str1, str2, str3) {
    let temp;

    // Bubble Sort
    if (str2.length > str1.length) {
        temp = str1;
        str1 = str2;
        str2 = temp;
    }

    if (str3.length > str2.length) {
        temp = str3;
        str3 = str2;
        str2 = temp;
    }

    if (str2.length > str1.length) {
        temp = str1;
        str1 = str2;
        str2 = temp;
    }
    
    return str1 + " " + str2 + " " + str3;
}

function infiniteLoop() {
    while (true) {
        console.log("Hello World");
    }
}

// Space Compexity: O(n) Total, O(1) Constant
// Time Complexity: O(n)
function secondHighest(arr) {
    if (arr.length <= 1) {
        return -1;
    }

    let highest;
    let secondHighest;

    if (arr[0] < arr[1]) {
        secondHighest = arr[0];
        highest = arr[1];
    } else {
        secondHighest = arr[1];
        highest = arr[0];
    }
    
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > highest) {
            secondHighest = highest;
            highest = arr[i];
        } else if (arr[i] > secondHighest) {
            secondHighest = arr[i];
        }
    }

    return secondHighest;
}

// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
function fizzBuzz(n) {
    let myString = "";

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            if (i % 15 == 0) {
                myString += "fizzbuzz";
            } else if (i % 3 == 0) {
                myString += "fizz";
            } else {
                myString += "buzz";
            }
        } else {
            myString += i;
        }

        if (i < n) {
            myString += " ";
        }
    }

    return myString;
}

// Time Complexity: O(n)
function topTwo(arr) {
    let temp;
    let topVal;
    let secondHighestVal;
    let topTwoKeys = [];
    let occurencesMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (occurencesMap.has(arr[i])) {
            occurencesMap.set(arr[i], occurencesMap.get(arr[i]) + 1);
        } else {
            occurencesMap.set(arr[i], 1);
        }
    }

    for (const keyVal of occurencesMap) {
        topVal = occurencesMap.get(topTwoKeys[0]);
        secondHighestVal = occurencesMap.get(topTwoKeys[1]);

        if (topTwoKeys.length < 2) {
            topTwoKeys.push(keyVal[0]);

            if (topTwoKeys.length == 2 && (topVal < keyVal[1] || (topVal == keyVal[1] && keyVal[0] < topTwoKeys[0]))) {
                temp = topTwoKeys[0];
                topTwoKeys[0] = topTwoKeys[1];
                topTwoKeys[1] = temp;
            }
        } else if (keyVal[1] > topVal || (keyVal[1] == topVal && keyVal[0] < topTwoKeys[0])) {
            temp = topTwoKeys[0];
            topTwoKeys[0] = topTwoKeys[1];
            topTwoKeys[1] = temp;

            topTwoKeys[0] = keyVal[0];
        } else if (keyVal[1] == topVal && keyVal[0] > topTwoKeys[0] && (keyVal[1] > secondHighestVal || keyVal[0] < topTwoKeys[1])) {
            topTwoKeys[1] = keyVal[0];
        } else if (keyVal[1] > secondHighestVal || (keyVal[1] == secondHighestVal && keyVal[0] < topTwoKeys[1])) {
            topTwoKeys[1] = keyVal[0];
        }
    }

    return topTwoKeys;
}

function toBinary(decimalNum) {
    if (decimalNum == 0) {
        return "0";
    }

    let temp;
    let binaryString = "";

    for (let i = Math.floor(Math.log2(decimalNum)); i >= 0; i--) {
        temp = Math.pow(2, i);
        if (temp <= decimalNum) {
            binaryString += "1";
            decimalNum -= temp;
        } else {
            binaryString += "0";
        }
    }

    return binaryString;
}

function toDecimal(numString, base = 2) {
    let decimal = 0;
    let len = numString.length;
    let temp;
    for (let i = 0; i < len; i++) {

        switch (numString[len - i - 1]) {
            case "A": {
                temp = 10;
                break;
            } case "B": {
                temp = 11;
                break;
            } case "C": {
                temp = 12;
                break;
            } case "D": {
                temp = 13;
                break;
            } case "E": {
                temp = 14;
                break;
            } case "F": {
                temp = 15;
                break;
            } default: {
                temp = numString[len - i - 1];
            }
        }

        decimal += temp * Math.pow(base, i);
    }
    return decimal;
}

function powFunctionRec(base, exponent) {
    if (exponent == 0) {
        return 1;
    }
    
    return base * powFunctionRec(base, exponent - 1);
}

function powFunctionIter(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

function fibonacciRec(n) {
    return 0;
}

function fibonacciIter(n) {
    return 0;
}

function reverseString(myString) {
    return 0;
}

function stocks(arr) {
    return 0;
}

function toLowerCaseTests() {
    console.assert(toLowerCase("M") == "m");
    console.assert(toLowerCase("A") == "a");
    console.assert(toLowerCase("z") == "z");
    console.assert(toLowerCase("Z") == "z");
    console.assert(toLowerCase("a") == "a");
    console.assert(!toLowerCase("Alex"));
}

function isPalindromeTests() {
    console.assert(!isPalindrome("Alex"), "Alex");
    console.assert(!isPalindrome(""), "<Empty String>");
    console.assert(isPalindrome("Mom"), "Mom");
    console.assert(isPalindrome("dad"), "dad");
    console.assert(isPalindrome("racecar"), "racecar");
    console.assert(isPalindrome("abba"), "abba");
    console.assert(!isPalindrome("-121"), "-121");
    console.assert(isPalindrome("121"), "121");
}

function isPrimeTests() {
    console.assert(!isPrime(0), 0);
    console.assert(!isPrime(1), 1);
    console.assert(isPrime(2), 2);
    console.assert(isPrime(3), 3);
    console.assert(!isPrime(4), 4);
    console.assert(isPrime(5), 5);
    console.assert(isPrime(43), 43);
    console.assert(!isPrime(39), 39);
}

function reorderTests() {
    console.assert(reorder("", "", "") == "  ", "3 Empty Strings");
    console.assert(reorder("a", "a", "a") == "a a a", "3 Non-empty Strings of the Same Length");
    console.assert(reorder("a", "ab", "ab") == "ab ab a", "2 Strings of the same length 1");
    console.assert(reorder("ab", "a", "ab") == "ab ab a",  "2 Strings of the same length 2");
    console.assert(reorder("ab", "ab", "a") == "ab ab a",  "2 Strings of the same length 3");
    console.assert(reorder("a", "ab", "abc") == "abc ab a", "All three different length 1");
    console.assert(reorder("a", "abc", "ab") == "abc ab a", "All three different length 2");
    console.assert(reorder("ab", "a", "abc") == "abc ab a", "All three different length 3");
    console.assert(reorder("ab", "abc", "a") == "abc ab a", "All three different length 4");
    console.assert(reorder("abc", "a", "ab") == "abc ab a", "All three different length 5");
    console.assert(reorder("abc", "ab", "a") == "abc ab a", "All three different length 6");
}

function secondHighestTests() {
    console.assert(secondHighest([]) == -1, "Empty Array");
    console.assert(secondHighest([1]) == -1, "Array with one value");
    console.assert(secondHighest([1, 2]) == 1, "Array with two values 1");
    console.assert(secondHighest([2, 1]) == 1, "Array with two values 2");
    console.assert(secondHighest([1, 2, 3, 4]) == 3, "Array with multiple values 1");
    console.assert(secondHighest([1, 3, 2, 4]) == 3, "Array with multiple values 2");
    console.assert(secondHighest([3, 2, 1, 4]) == 3, "Array with multiple values 3");
    console.assert(secondHighest([11, 22, 44, 33]) == 33, "Array with multiple values 4");
}

function fizzBuzzTests() {
    console.assert(fizzBuzz(0) == "", 0);
    console.assert(fizzBuzz(1) == "1", 1);
    console.assert(fizzBuzz(2) == "1 2", 2);
    console.assert(fizzBuzz(3) == "1 2 fizz", 3);
    console.assert(fizzBuzz(4) == "1 2 fizz 4", 4);
    console.assert(fizzBuzz(5) == "1 2 fizz 4 buzz", 5);
    console.assert(fizzBuzz(6) == "1 2 fizz 4 buzz fizz", 6);
    console.assert(fizzBuzz(7) == "1 2 fizz 4 buzz fizz 7", 7);
    console.assert(fizzBuzz(15) == "1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz", 15);
}

function topTwoTestsHelper(arr, value1, value2) {
    return arr[0] == value1 && arr[1] == value2;
}

function topTwoTests() {
    let arr = topTwo(["A", "B"]);
    console.assert(topTwoTestsHelper(arr, "A", "B"), "Test 1: " + arr);

    arr = topTwo(["A", "B", "B"]);
    console.assert(topTwoTestsHelper(arr, "B", "A"), "Test 2: " + arr);

    arr = topTwo(["A", "B", "B", "A"]);
    console.assert(topTwoTestsHelper(arr, "A", "B"), "Test 3: " + arr);

    arr = topTwo(["A", "B", "C", "C"]);
    console.assert(topTwoTestsHelper(arr, "C", "A"), "Test 4: " + arr);

    arr = topTwo(["A", "B", "C", "C", "D", "D", "D"]);
    console.assert(topTwoTestsHelper(arr, "D", "C"), "Test 5: " + arr);

    arr = topTwo(["A", "D", "D", "C", "D", "B", "C"]);
    console.assert(topTwoTestsHelper(arr, "D", "C"), "Test 6: " + arr);
}

function toBinaryTests() {
    let result = toBinary(0);
    console.assert(result === "0", "Returned: " + result + ", Expected: " + 0);
    result = toBinary(1);
    console.assert(result === "1", "Returned: " + result + ", Expected: " + 1);
    result = toBinary(2);
    console.assert(result === "10", "Returned: " + result + ", Expected: " + 10);
    result = toBinary(3);
    console.assert(result === "11", "Returned: " + result + ", Expected: " + 11);
    result = toBinary(4);
    console.assert(result === "100", "Returned: " + result + ", Expected: " + 100);
}

function toDecimalTests() {
    let result = toDecimal("0");
    console.assert(result === 0, "Returned: " + result + ", Expected: " + 0);
    result = toDecimal("1");
    console.assert(result === 1, "Returned: " + result + ", Expected: " + 1);
    result = toDecimal("10");
    console.assert(result === 2, "Returned: " + result + ", Expected: " + 2);
    result = toDecimal("11");
    console.assert(result === 3, "Returned: " + result + ", Expected: " + 3);
    result = toDecimal("100");
    console.assert(result === 4, "Returned: " + result + ", Expected: " + 4);

    result = toDecimal("753", 8);
    console.assert(result === 491, "Returned: " + result + ", Expected: " + 491);

    result = toDecimal("F5", 16);
    console.assert(result === 245, "Returned: " + result + ", Expected: " + 245);
}

function powFunctionIterTests() {
    let result = powFunctionIter(0, 0);
    console.assert(result == 1, "Returned: " + result + ", Expected: 1");
    result = powFunctionIter(0, 1);
    console.assert(result == 0, "Returned: " + result + ", Expected: 0");

    result = powFunctionIter(1, 0);
    console.assert(result == 1, "Returned: " + result + ", Expected: 1");
    result = powFunctionIter(1, 1);
    console.assert(result == 1, "Returned: " + result + ", Expected: 1");
    result = powFunctionIter(1, 2);
    console.assert(result == 1, "Returned: " + result + ", Expected: 1");

    result = powFunctionIter(2, 0);
    console.assert(result == 1, "Returned: " + result + ", Expected: 1");
    result = powFunctionIter(2, 1);
    console.assert(result == 2, "Returned: " + result + ", Expected: 2");
    result = powFunctionIter(2, 2);
    console.assert(result == 4, "Returned: " + result + ", Expected: 4");
    result = powFunctionIter(2, 3);
    console.assert(result == 8, "Returned: " + result + ", Expected: 8");

    result = powFunctionIter(.25, 0);
    console.assert(result == 1, "Returned: " + result + ", Expected: 1");
    result = powFunctionIter(.25, 1);
    console.assert(result == 0.25, "Returned: " + result + ", Expected: 0.25");
    result = powFunctionIter(.25, 2);
    console.assert(result == 0.0625, "Returned: " + result + ", Expected: 0.0625");
    result = powFunctionIter(.25, 3);
    console.assert(result == 0.015625, "Returned: " + result + ", Expected: 0.015625");

    result = powFunctionIter(-3, 0);
    let expected = 1
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);
    result = powFunctionIter(-3, 1);
    expected = -3
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);
    result = powFunctionIter(-3, 2);
    expected = 9
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);
    result = powFunctionIter(-3, 3);
    expected = -27
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);

    result = powFunctionIter(-.2, 0);
    expected = 1
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);
    result = powFunctionIter(-.2, 1);
    expected = -.2
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);
    result = Math.round(powFunctionIter(-.2, 2) * 100) / 100;
    expected = .04
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);
    result = Math.round(powFunctionIter(-.2, 3) * 1000) / 1000;
    expected = -.008
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);
}

function powFunctionRecTests() {
    let result = powFunctionRec(0, 0);
    console.assert(result == 1, "Returned: " + result + ", Expected: 1");
    result = powFunctionRec(0, 1);
    console.assert(result == 0, "Returned: " + result + ", Expected: 0");

    result = powFunctionRec(1, 0);
    console.assert(result == 1, "Returned: " + result + ", Expected: 1");
    result = powFunctionRec(1, 1);
    console.assert(result == 1, "Returned: " + result + ", Expected: 1");
    result = powFunctionRec(1, 2);
    console.assert(result == 1, "Returned: " + result + ", Expected: 1");

    result = powFunctionRec(2, 0);
    console.assert(result == 1, "Returned: " + result + ", Expected: 1");
    result = powFunctionRec(2, 1);
    console.assert(result == 2, "Returned: " + result + ", Expected: 2");
    result = powFunctionRec(2, 2);
    console.assert(result == 4, "Returned: " + result + ", Expected: 4");
    result = powFunctionRec(2, 3);
    console.assert(result == 8, "Returned: " + result + ", Expected: 8");

    result = powFunctionRec(.25, 0);
    console.assert(result == 1, "Returned: " + result + ", Expected: 1");
    result = powFunctionRec(.25, 1);
    console.assert(result == 0.25, "Returned: " + result + ", Expected: 0.25");
    result = powFunctionRec(.25, 2);
    console.assert(result == 0.0625, "Returned: " + result + ", Expected: 0.0625");
    result = powFunctionRec(.25, 3);
    console.assert(result == 0.015625, "Returned: " + result + ", Expected: 0.015625");

    result = powFunctionRec(-3, 0);
    let expected = 1
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);
    result = powFunctionRec(-3, 1);
    expected = -3
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);
    result = powFunctionRec(-3, 2);
    expected = 9
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);
    result = powFunctionRec(-3, 3);
    expected = -27
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);

    result = powFunctionRec(-.2, 0);
    expected = 1
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);
    result = powFunctionRec(-.2, 1);
    expected = -.2
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);
    result = Math.round(powFunctionRec(-.2, 2) * 100) / 100;
    expected = .04
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);
    result = Math.round(powFunctionRec(-.2, 3) * 1000) / 1000;
    expected = -.008
    console.assert(result == expected, "Returned: " + result + ", Expected: " + expected);
}

function main() {
    toLowerCaseTests();
    isPalindromeTests();
    isPrimeTests();
    reorderTests();
    secondHighestTests();
    // infiniteLoop();
    fizzBuzzTests();
    topTwoTests();
    toBinaryTests();
    toDecimalTests();
    powFunctionIterTests();
    powFunctionRecTests();
}

main();
