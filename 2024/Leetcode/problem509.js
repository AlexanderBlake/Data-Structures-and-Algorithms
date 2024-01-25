/**
 * @param {number} n
 * @return {number}
 */
// Simple Recursive Solution
// Time Complexity: O(2 ^ n) Exponetial Time
// Space Complexity: O(n) w/ call stack Linear Space
/**
 * @param {number} n
 * @return {number}
 */
 /*
var fib = function(n) {
    if (n <= 1) {
        return n;
    }
    
    return fib(n - 1) + fib(n - 2);
};
*/

// Recursion w/ Hash Table
// Time Complexity: O(n) Linear Time
// Space Complexity: O(n) Linear Space
/**
 * @param {number} n
 * @return {number}
 */
 /*
function fibonacci(n, values) {
    if (values[n] === undefined) {
        values[n] = fibonacci(n - 1, values) + fibonacci(n - 2, values);
    }
    return values[n];
}

var fib = function(n) {
    return fibonacci(n, {0: 0, 1: 1});
};
*/

// Matrix Solution
// Time Complexity: O(log n) Logarithmetic Time
// Space Complexity: O(log n) w/ call stack Logarithmetic Space

// Iterative Solution
// Time Complexity: O(n) Linear Time
// Space Complexity: O(1) Constant Space
var fib = function(n) {
    if (n <= 1) {
        return n;
    }

    let curr = 1;
    let prev = 0;

    for (let i = 2; i <= n; i++) {
        let temp = prev;
        prev = curr;
        curr += temp;
    }

    return curr;
};