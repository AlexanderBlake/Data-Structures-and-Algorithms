/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Brute-Force
    // Time Complexity: O(n^2) Quadratic Time
    // Space Complexity: O(1) Constant Space
    /*
    let result = nums[0];

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        result = result < current ? current : result;

        for (let idx = i + 1; idx < nums.length; idx++) {
            current += nums[idx];
            // current = Math.sum(nums.slice(i, idx));
            result = result < current ? current : result;
        }
    }
    return result;
    */
    // Time Complexity: O(n) Linear Time
    // Space Complexity: O(1) Constant Space
    let bestSum = nums[0];
    let currentSum = bestSum;
    for (let i = 1; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = 0;
        }

        currentSum += nums[i];
        bestSum = currentSum > bestSum ? currentSum : bestSum;
    }
    return bestSum;
};