/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    // Time Complexity: O(n) Linear Time
    // Space Complexity: O(n) Linear Space
    let result = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        result = result.slice(0, index[i]).concat(nums[i], result.slice(index[i]));
    }

    return result;
};