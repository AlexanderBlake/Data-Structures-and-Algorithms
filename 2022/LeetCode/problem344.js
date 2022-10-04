/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (var i = 0; i < s.length / 2; i++) {
        var temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
};