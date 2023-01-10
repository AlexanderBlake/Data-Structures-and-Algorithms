/**
 * @param {number} n
 * @return {number}
 */

// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
var fib = function(n) {
    var result;

    if (n < 2) {
        result = n;
    } else {
        let previous = 0;
        let current = 1;
        let temp;

        for (var i = 2; i <= n; i++) {
            temp = previous + current;
            previous = current;
            current = temp;
        }

        result = current;
    }

    return result;
};