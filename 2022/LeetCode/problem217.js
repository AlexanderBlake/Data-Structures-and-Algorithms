/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var result = false;

    /*
    // Time Complexity: O(n) Linear
    // Space Complexity: O(1) Constant
    var myResult = nums[0];

    for (var i = 1; i < nums.length && myResult != 0; i++) {
        myResult ^= nums[i];
    }

    return myResult === 0;
    */

    // Time Complexity: O(n) Linear
    // Space Complexity: O(n) Linear
    /*
    var mySet = new Set();

    for (var i = 0; i < nums.length && !result; i++) {
        if (!mySet.has(nums[i])) {
            mySet.add(nums[i]);
        } else {
            result = true;
        }
    }
    */

    // Time Complexity: O(n log n)
    // Space Complexity: O(1) Constant
    /*
    nums.sort();

    for (var i = 0; i < nums.length - 1 && !result; i++) {
        if (nums[i] === nums[i + 1]) {
            result = true;
        }
    }
    */

    // Time Complexity: O(n ^ 2) Quadratic
    // Space Complexity: O(1) Constant
    /*
    for (var i = 0; i < nums.length && !result; i++) {
        for (var j = i + 1; j < nums.length && !result; j++) {
            if (nums[i] === nums[j]) {
                result = true;
            }
        }
    }
    */

    return result;
};