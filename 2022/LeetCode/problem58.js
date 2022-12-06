/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var count = 0;
    var start = 1;

    while (s[s.length - count - start] === " ") {
        start++;
    }

    while (s.length - count - start >= 0 && s[s.length - count - start] !== " ") {
        count++;
    }

    return count;
    
    /*
    var wordArr = s.trim().split(" ")

    var lastWord = wordArr[wordArr.length - 1]

    return lastWord.length
    */
};