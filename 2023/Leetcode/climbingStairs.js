/**
 * @param {number} n
 * @return {number}
 */
 
 // Time Complexity: O(2^n) Linear Time
 // Space Complexity: O(1) Constant Space
var climbStairs = function(n) {
    if (n < 3) {
        return n;
    }

    return climbStairs(n - 1) + climbStairs(n - 2);

};