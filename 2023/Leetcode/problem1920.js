/**
 * @param {number[]} nums
 * @return {number[]}
 */

 // Time Complexity: O(n) Linear Time
 // Space Complexity: O(n) Linear Space
var buildArray = function(nums) {
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }

    return ans;
};