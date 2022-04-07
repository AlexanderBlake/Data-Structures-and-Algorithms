function reverseString(myStr) {
    let reversed = "";

    for (let i = myStr.length - 1; i >= 0; i--) {
        reversed += myStr[i];
    }

    return reversed;
}

// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
function isPalindrome(myStr) {
    for (let i = 0; i < myStr.length / 2; i++) {
        if (myStr[i] !== myStr[myStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
    // return myStr === reverseString(myStr);
}

function isPalindromeTests() {
    console.assert(!isPalindrome("cat"));
    console.assert(isPalindrome("bob"));
    console.assert(isPalindrome("racecar"));
    console.assert(isPalindrome("abba"));
}

function main() {
    isPalindromeTests();
}

main();
