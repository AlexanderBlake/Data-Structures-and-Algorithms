/**
 * @param {string} s
 * @return {boolean}
 */

 /*
s = 'racecar' -> 'racecar'
true

s = 'Alex' -> 'xelA'
false

s = 'RAcecar'
true

s = 'race car'
true
 */

 function isalphanum(letter) {
    return 48 <= letter.charCodeAt(0) && letter.charCodeAt(0) <= 57 ||
           65 <= letter.charCodeAt(0) && letter.charCodeAt(0) <= 90 ||
           97 <= letter.charCodeAt(0) && letter.charCodeAt(0) <= 122;
 }

 /*
 n = Number of character in s

 Time Complexity: O(n) Linear Time
 Space Complexity: O(1) Constant Space
 */
var isPalindrome = function(s) {
    let front = 0;
    let back = s.length - 1;

    while (front < back) {
        while (front < s.length && !isalphanum(s[front])) {
            front++;
            // ++front;
            // front = front + 1;
        }

        while (back >= 0 && !isalphanum(s[back])) {
            back--;
        }

        if (front >= s.length || back < 0) {
            break;
        }

        if (front < back && s[front].toLowerCase() !== s[back].toLowerCase()) {
            console.log(front, " ", back);
            return false;
        }

        front++;
        back--;
    }

    return true;
};