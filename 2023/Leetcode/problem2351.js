/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    /*
    // Time Complexity: O(n ^ 2) Quadratic Time
    // Space Complexity: O(1) Constant Space
    for (let i = 1; i < s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (s[j] === s[i]) {
                return s[j];
            }
        }
    }
    */

    // Time Complexity: O(n) Linear Time
    // Space Complexity: O(n) Linear Space
    mySet = new Set();
    for (let i = 0; i < s.length; i++) {
        if (mySet.has(s[i])) {
            return s[i];
        } else {
            mySet.add(s[i]);
        }
    }
};