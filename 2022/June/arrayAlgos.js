// Find a subarray of maximum length such that the product of all
// the elements in the subarray is 1.
// Time Complexity: O(n) Linear Time
function subArrayLength(arr) {
    let len1;
    let len2;
    let negativeCount = 0;
    let lastNegativeIndex = -1;
    let firstNegativeIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            if (firstNegativeIndex === -1) {
                firstNegativeIndex = i;
            }
            lastNegativeIndex = i;
            negativeCount++;
        }
    }

    if (negativeCount % 2 === 0) {
        return arr.length;
    }
    
    len1 = arr.slice(0, lastNegativeIndex).length;
    len2 = arr.slice(firstNegativeIndex + 1).length;

    if (len1 > len2) {
        return len1;
    }
    return len2;
}

function subArrayLengthTests() {
    console.assert(subArrayLength([1, -1, -1, -1, 1, 1]) === 4, "3 negative numbers");
    console.assert(subArrayLength([1, 1, -1, 1, 1, 1]) === 3, "1 negative number");
}

// Given a string containing just the characters '(' and ')',
// find the length of the longest valid (well-formed) parentheses substring
// Time Complexity: O(n) Linear Time
function longestValid(s) {
    let tempResult;
    let result = 0;
    let openCount = 0;
    let closeCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            openCount++;
        } else {
            closeCount++;
        }

        if (closeCount > openCount) {
            tempResult = openCount + closeCount - 1;

            if (tempResult > result) {
                result = tempResult;
            }

            openCount = 0;
            closeCount = 0;
        }
    }

    if (closeCount <= openCount) {
        tempResult = closeCount * 2;

        if (tempResult > result) {
            return tempResult;
        }
    }

    return result;
}

function longestValidTests() {
    console.assert(longestValid("(()") === 2, "Open, open, close");
    console.assert(longestValid(")()())") === 4, "Close, open, close, open, close, close");
    console.assert(longestValid("") === 0, "Empty String");
    console.assert(longestValid("(())") === 4, " Open, open, close, close");
    console.assert(longestValid("(()(") === 2, "Open, open, close, open");
    console.assert(longestValid("()(") === 2, "Open, close, open");
    console.assert(longestValid("())()()") === 4, "Open, close, close, open, close, open, close");
    console.assert(longestValid("))((") === 0, "Close, close, open, open");
}

function main() {
    subArrayLengthTests();
    longestValidTests();
}

main();
