/**
 * @param {number[]} nums
 * @return {number}
 */
 // n: nums.length
 // Time Complexity: O(n) Linear Time
 // Space Complexity: O(1) Constant Space
var removeDuplicates = function(nums) {
    let red = 0;
    let black = 1;

    while (black < nums.length) {
        while (black < nums.length && nums[red] === nums[black]) {
            black++;
        }

        if (black < nums.length) {
            nums[red + 1] = nums[black];
            red++;
            black++;
        }
    }

    return red + 1;
};