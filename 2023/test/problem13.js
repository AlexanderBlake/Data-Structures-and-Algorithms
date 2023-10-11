/**
 * @param {string} s
 * @return {number}
 */

 /*
    Case: "" = 0
    Case: "I" = 1
    Case: "VI" = 6
    Case: "IX" = 9
    Case: "XLVIII" = 48
    Case: "XLIX" = 49
 */

// n = Number of Characters in s
// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
var romanToInt = function(s) {
    let result = 0;
    let valueTable = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};

    for (let i = 0; i < s.length - 1; i++) {
        let current = valueTable[s[i]];

        if (current < valueTable[s[i + 1]]) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result + valueTable[s[s.length - 1]];
};
