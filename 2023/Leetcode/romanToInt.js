/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let values = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};

    // Time Complexity: O(n) Linear Time
    // Space Complexity: O(1) Constant Space
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let currVal = values[s[i]];
        let nextVal = values[s[i + 1]];

        if (nextVal > currVal) {
            result -= currVal;
        } else {
            result += currVal;
        }
    }

    return result;
};