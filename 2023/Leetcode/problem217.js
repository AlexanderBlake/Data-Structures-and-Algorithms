/**
 * @param {number[]} nums
 * @return {boolean}
 */
 // Time Complexity: O(n) Linear, Space Complexity: O(n) Linear
var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length;
};