/**
 * @param {number} n
 * @return {number}
 */
 
 // Time Complexity: O(n) Linear Time
 // Space Complexity: O(1) Constant Space
 var climbStairs = function(n) {
    if (n < 3) {
        return n;
    }
    let prev = 1;
    let curr = 2;

    for (let i = 3; i <= n; i++) {
        let temp = prev + curr;
        prev = curr;
        curr = temp;
    }

    return curr;
};