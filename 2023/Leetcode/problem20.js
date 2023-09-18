/**
 * @param {string} s
 * @return {boolean}
 */
function isOpening(c) {
    return c == '(' || c == '{' || c == '[';
}

/*
function matchingParen(c) {
    if (c == ')') {
        return '(';
    } else if (c == ']') {
        return '[';
    }
    return '{';
}
*/

// n = s.length
// Time Complexity: O(n) Linear Time
// Space Complexity: O(n) Linear Space
var isValid = function(s) {
    let opens = [];
    let matchingParen = {')': '(', ']': '[', '}': '{'};

    for (let i = 0; i < s.length; i++) {
        if (isOpening(s[i])) {
            opens.push(s[i]);
        } else if (opens.length == 0 || opens.pop() != matchingParen[s[i]]) {
            return false;
        }
    }

    return opens.length == 0;
};