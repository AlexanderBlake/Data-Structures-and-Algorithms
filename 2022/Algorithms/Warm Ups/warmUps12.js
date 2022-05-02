// Time Complexity: O(n) Linear Time
// T(n) = n + n = 2n
/*
function isPalindrome(word) {
    let reverseWord = "";

    // T(n)
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }

    // T(n)
    return word === reverseWord;
}
*/

// Time Complexity: O(n) Linear Time
// T(n) = n
function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}


function main() {
    console.log(isPalindrome("racecar"));
    console.log(isPalindrome("dad"));
    console.log(isPalindrome("alex"));
    console.log(isPalindrome("abc"));
    console.log(isPalindrome("tacocat"));
    console.log(isPalindrome("radar"));
    console.log(isPalindrome("abba"));
}

main();
