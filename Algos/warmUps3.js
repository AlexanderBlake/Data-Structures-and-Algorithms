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

    /*
    for (let i = 3; i < n / 2; i+=2) {
        if (n % i == 0) {
            return false;
        }
    }
    */
    return true;
}

function reorder(str1, str2, str3) {
    let temp;
    let count = 1;

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

    if (str1.length == str2.length) {
        count = 2;
    }

    if (str2.length == str3.length) {
        if (count < 1) {
            count = 2;
        } else {
            count = 3;
        }
    }

    if (count < 2) {
        console.log(str1, str2, str3);
    }

    return count;

    /*
    if (str1.length == str2.length) {
        if (str2.length == str3.length) {
            return 3;
        }
        return 2;
    }

    if (str2.length == str3.length || str1.length == str3.length) {
        return 2;
    }

    if (str1.length > str2.length) {
        if (str3.length > str2.length) {
            if (str3.length > str1.length) {
                console.log(str1, str3, str2);
            }
        }
    } else if (str2.length > str1.length) {
        if (str1.length > str3.length) {
            console.log(str2, str1, str3);
        } else {
            console.log(str2, str3, str1);
        }
    } else if (str3.length > str1.length) {
        if (str2.length > str1.length) {
            console.log(str3, str2, str1);
        } else {
            console.log(str3, str1, str2);
        }
    }
    return 1;
    */
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
    // console.assert(isPalindrome(121), "abba");
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
    console.assert(reorder("", "", "") == 3);
    console.assert(reorder("a", "a", "a") == 3);
    console.assert(reorder("ab", "bc", "a") == 2);
    console.assert(reorder("ab", "a", "az") == 2);
    console.assert(reorder("a", "22", "aa") == 2);
    console.assert(reorder("ab", "cde", "zzzzzzzz") == 1);
    console.assert(reorder("ab", "zzzzzzzz", "cde") == 1);
    console.assert(reorder("abasdkljfkdjlsafjklsadfkjlfsd", "z", "cde") == 1);
}

function main() {
    toLowerCaseTests();
    isPalindromeTests();
    isPrimeTests();
    reorderTests();

    /* console.log("2" == 2);
    console.log(2 == "2.0");
    console.log(2 === 2);
    console.log(2 === "2.0");
    console.log(2 === "2");*/
}

main();
