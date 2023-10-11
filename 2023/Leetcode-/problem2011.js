/**
 * @param {string[]} operations
 * @return {number}
 */

 // Time Complexity: O(n) Linear Time
 // Space Complexity: O(1) Constant Space
var finalValueAfterOperations = function(operations) {
    var x = 0;

    for (var i = 0; i < operations.length; i++) {
        if (operations[i][1] === "+") {
            ++x;
        } else {
            --x;
        }
    }

    return x;
};