/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let myStack = [];
    let matching = {'(': ')', '{': '}', '[': ']'};


    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            myStack.push(s[i]);
        } else if (matching[myStack[myStack.length - 1]] !== s[i]) {
            return false;
        } else {
            myStack.pop();
        }
    }

    return myStack.length === 0;
};