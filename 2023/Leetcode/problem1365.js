/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // Time Complexity: O(n ^ 2) Quadratic Time
    // Space Complexity: O(n) Linear Space
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (j != i && nums[j] < nums[i]) {
                count++;
            }
        }

        result.push(count);
    }

    return result;
};