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

    // let wordReverse = "";
    for (let i = 0; i < word.length / 2; i++) {
        if (toLowerCase(word[i]) != toLowerCase(word[word.length - 1 - i])) {
            return false;
        }
        // wordReverse += word[i].toLowerCase();
        // what if the wordReverse is empty? 
    }
    return true;

    /*
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i].toLowerCase() != wordReverse[i]) {
            return false;
        }
        // what about casing?
    }

    return true;
    */
}

function toLowerCaseTests() {
    console.assert(toLowerCase("M") == "m");
    console.assert(toLowerCase("a") == "a");
    console.assert(toLowerCase("A") == "a");
    console.assert(toLowerCase("z") == "z");
    console.assert(toLowerCase("Z") == "z");
    console.assert(!toLowerCase("Alex"));
}

function isPalindromeTests() {
    console.assert(!isPalindrome("Alex"), "Alex");
    console.assert(!isPalindrome(""), "<Empty String>");
    console.assert(isPalindrome("Mom"), "Mom");
    console.assert(isPalindrome("dad"), "dad");
    console.assert(isPalindrome("racecar"), "racecar");
    console.assert(isPalindrome("abba"), "abba");
    // console.assert(isPalindrome(121), "abba");
    console.assert(!isPalindrome("-121"), "-121");
    console.assert(isPalindrome("121"), "121");
}

function main() {
    toLowerCaseTests();
    isPalindromeTests();
}

main();
