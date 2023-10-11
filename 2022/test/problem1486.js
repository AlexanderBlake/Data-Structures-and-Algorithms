/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
var xorOperation = function(n, start) {
    var result = start;

    for (var i = 1; i < n; i++) {
        result ^= start + 2 * i;
    }

    return result;
};